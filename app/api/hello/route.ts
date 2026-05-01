import { NextResponse } from "next/server";

type ApiResponse<Data> = {
   message: Data 
   poweredBy: string
   timestamp: string 
}

export async function GET(request: Request):Promise<NextResponse> {
  const { searchParams } = new URL(request.url);

  const name = searchParams.get("name") || "stranger";

    return NextResponse.json({
    message: `Hello ${name}!`,
    timestamp: new Date().toISOString(),
    poweredBy: process.env.NEXT_PUBLIC_SITE_NAME || "Next.js",
  } as ApiResponse<string>);
}

