import prisma from "@/prisma/client"
import { createIssueSchema } from "@/validators/createIssueSchema"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validation = createIssueSchema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 })
    }

    // Create an issue on db.
    const newIssue = await prisma.issue.create({
      data: {
        title: body.title,
        description: body.description,
      },
    })
    return NextResponse.json(newIssue, { status: 200 })
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }
}

export async function GET() {
  try {
    const issues = await prisma.issue.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        privacy: "PUBLIC",
      },
    })
    return NextResponse.json(issues, { status: 200 })
  } catch (err) {
    return NextResponse.json(err, { status: 400 })
  }
}
