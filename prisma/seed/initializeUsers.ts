import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
import { $Enums } from "@prisma/client";

const db = new PrismaClient();

const TEST_USER_PW = process.env.TEST_USER_PW || "";

const seedInitialUsers = async () => {
  const users: { email: string; password: string; role: $Enums.Roles }[] = [
    {
      email: "super@test.com",
      password: TEST_USER_PW,
      role: $Enums.Roles.SUPER
    },
    {
      email: "admin@test.com",
      password: TEST_USER_PW,
      role: $Enums.Roles.ADMIN
    },
    {
      email: "customer@test.com",
      password: TEST_USER_PW,
      role: $Enums.Roles.CUSTOMER
    }
  ];

  users.map(async (user) => {
    const hashedPassword = await hash(user.password, 10);
    return await db.user.create({
      data: {
        email: user.email,
        password: hashedPassword,
        role: { connect: { name: user.role } },
        onboarding: {
          create: { status: user.role === $Enums.Roles.CUSTOMER ? "PENDING" : "COMPLETE" }
        }
      }
    });
  });
};

seedInitialUsers()
  .catch((e) => {
    console.error("🚫 Error while seeding: ", e.stack);
    process.exit(1);
  })
  .finally(async () => {
    console.log("end process");
    await db.$disconnect();
  });
