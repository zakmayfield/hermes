import { hash } from "bcryptjs";
import { PrismaClient, Roles } from "@prisma/client";

const db = new PrismaClient();

const testAdmins: {
  email: string;
  password: string;
  role: { name: Roles };
}[] = [
  {
    email: "admin1@test.com",
    password: "123",
    role: {
      name: "ADMIN"
    }
  },
  {
    email: "admin2@test.com",
    password: "123",
    role: {
      name: "ADMIN"
    }
  },
  {
    email: "admin3@test.com",
    password: "123",
    role: {
      name: "ADMIN"
    }
  }
];

const seedTestAdmins = async () => {
  testAdmins.forEach(
    async (admin) => await db.authorizedAdmin.create({ data: { email: admin.email } })
  );
  testAdmins.forEach(async (admin) => {
    await db.user.create({
      data: {
        email: admin.email,
        password: await hash(admin.password, 10),
        last_login_date: new Date(),
        role: {
          connect: admin.role
        }
      }
    });
  });
};

seedTestAdmins()
  .catch((e) => {
    console.error("🚫 Error while seeding: ", e.stack);
    process.exit(1);
  })
  .finally(async () => {
    console.log("end process");
    await db.$disconnect();
  });
