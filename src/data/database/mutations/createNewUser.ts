"use server";

import { db } from "@/lib/prisma";
import { hashPassword } from "@/utils/hashPassword";
import { createJWT } from "@/utils/createJWT";
import { signupValidator } from "@/utils/validators/forms/signupValidator";
import { $Enums } from "@prisma/client";

const { defaultValues } = signupValidator;

const isUserAuthorizedAdmin = async (email: string) => {
  return !!(await db.authorizedAdmin.findUnique({
    where: { email }
  }));
};

export const createNewUser = async ({ data }: { data: typeof defaultValues }) => {
  const { customer, bill, ship } = data;

  const isAuthorizedAdmin = await isUserAuthorizedAdmin(customer.email);
  const hashed_password = await hashPassword(customer.password);
  const { jwt, jwt_expiration_date } = await createJWT(customer.email);
  const uniqueIdentifier = `email-verification-${customer.email}`;

  if (isAuthorizedAdmin) {
    return await db.user.create({
      data: {
        email: customer.email,
        password: hashed_password,
        lastLoginDate: new Date(),
        role: {
          connect: {
            name: $Enums.Roles.ADMIN
          }
        },
        onboarding: {
          create: {
            status: $Enums.OnboardingStatus.COMPLETE
          }
        },
        cart: {
          create: {}
        }
      },
      include: {
        onboarding: {
          select: {
            status: true
          }
        }
      }
    });
  }

  switch (customer.isExistingCustomer) {
    case true:
      return await db.user.create({
        data: {
          email: customer.email,
          password: hashed_password,
          lastLoginDate: new Date(),
          role: {
            connect: { name: $Enums.Roles.CUSTOMER }
          },
          verificationToken: {
            create: {
              token: jwt,
              identifier: uniqueIdentifier,
              expires: jwt_expiration_date
            }
          },
          onboarding: {
            create: {
              status: $Enums.OnboardingStatus.PENDING
            }
          },
          customerInfo: {
            create: {
              companyName: customer.companyName,
              isExistingCustomer: customer.isExistingCustomer
            }
          }
        },
        include: {
          onboarding: {
            select: {
              status: true
            }
          }
        }
      });
    case false:
      return await db.user.create({
        data: {
          email: customer.email,
          password: hashed_password,
          lastLoginDate: new Date(),
          role: {
            connect: { name: $Enums.Roles.CUSTOMER }
          },
          verificationToken: {
            create: {
              token: jwt,
              identifier: uniqueIdentifier,
              expires: jwt_expiration_date
            }
          },
          onboarding: {
            create: {
              status: $Enums.OnboardingStatus.PENDING
            }
          },
          customerInfo: {
            create: {
              companyName: customer.companyName,
              isExistingCustomer: customer.isExistingCustomer,
              givenName: customer.givenName,
              familyName: customer.familyName,
              phoneNumber: customer.phoneNumber
            }
          },
          customerShipAddr: {
            create: {
              line1: ship!.line1,
              city: ship!.city,
              country: ship!.country,
              state: ship!.state,
              postalCode: ship!.postalCode
            }
          },
          customerBillAddr: {
            create: {
              line1: bill!.line1,
              city: bill!.city,
              country: bill!.country,
              state: bill!.state,
              postalCode: bill!.postalCode
            }
          }
        },
        include: {
          onboarding: {
            select: {
              status: true
            }
          }
        }
      });
  }
};
