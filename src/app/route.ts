import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params: { mlsID } }: { params: { mlsID: string } }
) {
  return NextResponse.json({ message: "Hello World!" });
}
