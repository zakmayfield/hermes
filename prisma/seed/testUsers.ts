import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const generateUsers = async (numOfUsers: number, role: "ADMIN" | "USER") => {
  const users: { email: string; password: string }[] = [];

  for (let index = 0; index < numOfUsers; index++) {
    const user = { email: `test@${role}${index}.com`, password: await hash("123", 10) };
    users.push(user);
  }

  return users;
};

const db = new PrismaClient();

const seedTestUsers = async (role: "ADMIN" | "USER") => {
  const users = await generateUsers(5, role);

  users.forEach(
    async (user) =>
      await db.user.create({
        data: {
          email: user.email,
          password: user.password,
          role: { connect: { name: role } }
        }
      })
  );
};

const deleteTestUsers = async (role: "ADMIN" | "USER") => {
  await db.user.deleteMany({
    where: {
      email: { contains: `test@${role}` }
    }
  });
};

seedTestUsers("ADMIN")
  .catch((e) => {
    console.error("🚫 Error while seeding: ", e.stack);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
