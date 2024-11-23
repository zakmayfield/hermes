import { db } from "@/lib/prisma";
import { decryptToken, encryption_password } from "@/utils/security/encryption";
import { headers } from "next/headers";

const baseUrl = process.env.QB_SANDBOX_BASE_URL!;

async function handler() {
  try {
    const headersList = await headers();
    const user_id = headersList.get("x-user-id");

    if (!user_id) {
      return new Response("Unauthenticated", { status: 401 });
    }

    const qbToken = await db.quickbooksToken.findUnique({
      where: {
        user_id
      }
    });

    if (!qbToken) {
      return new Response("whoops");
    }

    const decryptedToken = decryptToken(
      qbToken?.encrypted_access_token || "",
      encryption_password,
      qbToken?.access_token_iv || ""
    );

    const url = `${baseUrl}/company/${qbToken.realm_id}/query?query=select * from Item`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${decryptedToken}`
      }
    });

    const products = await response.json();

    return new Response(JSON.stringify(products.QueryResponse.Item));
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

export { handler as GET };
