import { PrismaClient } from "@prisma/client";

const generateUsers = (numOfUsers: number) => {
  const users: { email: string; password: string }[] = [];

  for (let index = 0; index < numOfUsers; index++) {
    const user = { email: `test@user${index}.com`, password: "123" };
    users.push(user);
  }

  return users;
};

console.log(generateUsers(5));

const db = new PrismaClient();

const testUsersSeed = async () => {
  generateUsers(5).forEach(
    async (user) =>
      await db.user.create({
        data: {
          email: user.email,
          password: user.password,
          role: { connect: { name: "USER" } }
        }
      })
  );
};

const deleteTestUsers = async () => {
  await db.user.deleteMany({
    where: {
      email: { contains: "test@user" }
    }
  });
};

testUsersSeed()
  .catch((e) => {
    console.error("🚫 Error while seeding: ", e.stack);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
