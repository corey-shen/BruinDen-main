// npm install @prisma/client
// npx prisma generate
import prisma from "prisma/libs/prismadb.ts";

async function createUser(name: string, email: string, hashedPassword: string) {
  return await prisma.User.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });
}

async function deleteUser(id: string) {
  return await prisma.User.delete({
    where: { id },
  });
}

async function getUserByEmail(email: string) {
  return await prisma.User.findUnique({
    where: { email: email },
  });
}

async function getUserByID(id: string) {
  return await prisma.user.findUnique({
    where: { id: id },
  });
}

//update user, given its id and parameter(s) need to be updated
async function updateUser(
  id: string,
  name?: string,
  email?: string,
  hashedPassword?: string,
  image?: string
) {
  // Intialize a map for possibly mapped data fields
  const data: { [key: string]: string } = {}; //might need to use "any" instead of "string"
  // Conditionally add fields to the data object
  if (name) data.name = name;
  if (email) data.email = email;
  if (hashedPassword) data.hashedPassword = hashedPassword;
  if (image) data.image = image;
  // Perform the update operation using prisma
  return await prisma.User.update({
    where: { id },
    data: data,
  });
}

async function createAccount(
  userId: string,
  type: string,
  provider: string,
  providerAccountId: string
) {
  //create and update should be promise functions
  const newAccount = await prisma.Account.create({
    data: {
      userId,
      type,
      provider,
      providerAccountId,
    },
  });
  await prisma.User.update({
    where: { id: userId },
    data: {
      accounts: {
        connect: { id: newAccount.id }, // Connect the new account to the user
      },
    },
  });
  return newAccount;
}

async function createListing(
  userID: string,
  title: string,
  description: string,
  imageSrc: string,
  category: string,
  roomCount: number,
  bathroomCount: number,
  address: string,
  price: number
) {
  const newListing = await prisma.Listing.create({
    data: {
      title,
      description,
      imageSrc,
      category,
      roomCount,
      bathroomCount,
      address,
      price,
    },
  });
  await prisma.User.update({
    where: { id: userID },
    data: { listings: { connect: { id: newListing.id } } },
  });
  return newListing;
}
