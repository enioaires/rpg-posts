import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { content, title, imageUrl, type } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!content || !title || !imageUrl || !type) {
      return new NextResponse("Invalid request", { status: 400 });
    }

    const post = await prismadb.post.create({
      data: {
        title,
        content,
        imageUrl,
        type
      },
    });

    return NextResponse.json(post);
  } catch (error: any) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
}