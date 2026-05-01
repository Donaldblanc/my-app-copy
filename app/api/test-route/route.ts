import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get("name") || "stranger";

  return NextResponse.json({
    message: `Hello ${name}!`,
    timestamp: new Date().toISOString(),
    poweredBy: process.env.NEXT_PUBLIC_SITE_NAME || "Next.js",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = body.name;

    if (!name) {
      return NextResponse.json(
        {
          error: "Name is required in POST body",
        },
        { status: 400 },
      );
    }
    return NextResponse.json({
      name: name,
      message: `Thanks for the post ${name}`,
      receivedAt: new Date().toISOString(),
    });
  } catch (_error) {
     return NextResponse.json(
       { error: "Name is required in POST body"},
        { status: 400 }
     )
  }
}
