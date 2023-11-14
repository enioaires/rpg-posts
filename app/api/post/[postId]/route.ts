import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
) {
  try {
    const { content, title, postId } = await req.json();

    if (!content || !title) {
      return new NextResponse("Invalid request", { status: 400 });
    }

    const post = await prismadb.post.update({
      where: { id: postId },
      data: {
        title,
        content,
      },
    });

    return NextResponse.json(post);
  } catch (error: any) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: { postId: number } }
) {
  try {

    const post = await prismadb.post.delete({
      where: { id: Number(params.postId) },
    });

    return NextResponse.json(post);
  } catch (error: any) {
    console.log(error);
    return new NextResponse(error, { status: 500 });
  }
}