import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function PATCH(request: NextRequest) {
  return NextResponse.json({ message: "Hello World!" });
}
