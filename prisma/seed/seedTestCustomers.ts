import { hash } from "bcryptjs";
import {
  CustomerBillAddr,
  CustomerInfo,
  CustomerShipAddr,
  OnboardingStatus,
  PrismaClient,
  Roles
} from "@prisma/client";

const db = new PrismaClient();

const testCustomers: {
  email: string;
  password: string;
  role: { name: Roles };
  onboarding: { status: OnboardingStatus };
  customerInfo: Partial<Omit<CustomerInfo, "customerInfoId" | "userId">>;
  customerShipAddr?: Omit<CustomerShipAddr, "customerShipAddrId" | "userId">;
  customerBillAddr?: Omit<CustomerBillAddr, "customerBillAddrId" | "userId">;
}[] = [
  {
    email: "customer1@test.com",
    password: "123",
    role: {
      name: "CUSTOMER"
    },
    onboarding: {
      status: "PENDING"
    },
    customerInfo: {
      isExistingCustomer: true,
      companyName: "Wraithtech Solutions"
    }
  },
  {
    email: "customer2@test.com",
    password: "123",
    role: {
      name: "CUSTOMER"
    },
    onboarding: {
      status: "PENDING"
    },
    customerInfo: {
      isExistingCustomer: true,
      companyName: "Foobar Inc"
    }
  },
  {
    email: "customer3@test.com",
    password: "123",
    role: {
      name: "CUSTOMER"
    },
    onboarding: {
      status: "PENDING"
    },
    customerInfo: {
      isExistingCustomer: false,
      companyName: "Dooloo Corp",
      givenName: "Eric",
      familyName: "Thames",
      phoneNumber: "3213213210"
    },
    customerShipAddr: {
      line1: "321 Bargin St",
      city: "Canute",
      country: "CA",
      state: "ON",
      postalCode: "C2C4D4"
    },
    customerBillAddr: {
      line1: "321 Bargin St",
      city: "Canute",
      country: "CA",
      state: "ON",
      postalCode: "C2C4D4"
    }
  }
];

const seedTestCustomers = async () => {
  testCustomers.forEach(
    async (customer) =>
      await db.user.create({
        data: {
          email: customer.email,
          password: await hash(customer.password, 10),
          lastLoginDate: new Date(),
          role: {
            connect: customer.role
          },
          onboarding: {
            create: customer.onboarding
          },
          cart: {
            create: {}
          },
          customerInfo: {
            create: {
              isExistingCustomer: customer.customerInfo.isExistingCustomer,
              companyName: customer.customerInfo.companyName!,
              givenName: customer.customerInfo.givenName,
              familyName: customer.customerInfo.familyName,
              phoneNumber: customer.customerInfo.phoneNumber
            }
          },
          customerShipAddr: {
            create: customer.customerShipAddr
          },
          customerBillAddr: {
            create: customer.customerBillAddr
          }
        }
      })
  );
};

seedTestCustomers()
  .catch((e) => {
    console.error("🚫 Error while seeding: ", e.stack);
    process.exit(1);
  })
  .finally(async () => {
    console.log("end process");
    await db.$disconnect();
  });
