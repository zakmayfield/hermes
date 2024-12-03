import { PrismaClient, Roles } from "@prisma/client";
import { hash } from "bcryptjs";

const db = new PrismaClient();

const testSuper: {
  email: string;
  password: string;
  role: { name: Roles };
}[] = [
  {
    email: "super@test.com",
    password: "123",
    role: {
      name: "SUPER"
    }
  }
];

const seedTestSuper = async () => {
  testSuper.forEach(
    async (s) =>
      await db.user.create({
        data: {
          email: s.email,
          password: await hash(s.password, 10),
          last_login_date: new Date(),
          role: {
            connect: s.role
          }
        }
      })
  );
};

seedTestSuper()
  .catch((e) => {
    console.error("🚫 Error while seeding: ", e.stack);
    process.exit(1);
  })
  .finally(async () => {
    console.log("end process");
    await db.$disconnect();
  });
