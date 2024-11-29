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
  const { customerInfo, shipAddr, billAddr } = data;

  const isAuthorizedAdmin = await isUserAuthorizedAdmin(customerInfo.email);
  const hashed_password = await hashPassword(customerInfo.password);
  const { jwt, jwt_expiration_date } = await createJWT(customerInfo.email);
  const uniqueIdentifier = `email-verification-${customerInfo.email}`;

  if (isAuthorizedAdmin) {
    return await db.user.create({
      data: {
        email: customerInfo.email,
        password: hashed_password,
        last_login_date: new Date(),
        role: {
          connect: {
            name: $Enums.Roles.ADMIN
          }
        },
        onboarding: {
          create: {
            status: $Enums.OnboardingStatus.COMPLETE
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

  switch (customerInfo.isExistingCustomer) {
    case true:
      return await db.user.create({
        data: {
          email: customerInfo.email,
          password: hashed_password,
          last_login_date: new Date(),
          role: {
            connect: { name: $Enums.Roles.CUSTOMER }
          },
          verification_token: {
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
              companyName: customerInfo.companyName,
              isExistingCustomer: customerInfo.isExistingCustomer
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
          email: customerInfo.email,
          password: hashed_password,
          last_login_date: new Date(),
          role: {
            connect: { name: $Enums.Roles.CUSTOMER }
          },
          verification_token: {
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
              companyName: customerInfo.companyName,
              isExistingCustomer: customerInfo.isExistingCustomer,
              givenName: customerInfo.givenName,
              familyName: customerInfo.familyName,
              phoneNumber: customerInfo.phoneNumber
            }
          },
          customerShipAddr: {
            create: {
              line1: shipAddr!.line1,
              city: shipAddr!.city,
              country: shipAddr!.country,
              state: shipAddr!.state,
              postalCode: shipAddr!.postalCode
            }
          },
          customerBillAddr: {
            create: {
              line1: billAddr!.line1,
              city: billAddr!.city,
              country: billAddr!.country,
              state: billAddr!.state,
              postalCode: billAddr!.postalCode
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
