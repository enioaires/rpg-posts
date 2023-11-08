import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(
  req: Request,
) {
  try {
    const body = await req.json();

    console.log(body)

    const { email, name, avatarUrl, userId } = body

    if (!email || !name || !avatarUrl || !userId) {
      return new NextResponse("Missing fields", { status: 400 });
    }


    const account = await prismadb.account.create({
      data: {
        email,
        name,
        avatarUrl,
        userId
      }
    })

    return NextResponse.json(account)
  } catch (error) {
    console.log("[ACCOUNT]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}