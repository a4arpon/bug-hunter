import prisma from "@/prisma/client"
import { issueReplaySchema } from "@/validators/createIssueSchema"
import { NextResponse } from "next/server"

export async function POST(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    body.issue = id
    const validation = issueReplaySchema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 })
    }
    // Create an issue on db.
    const newIssue = await prisma.issueReplay.create({
      data: {
        issue: id,
        issue_privacy: body?.privacy || "PUBLIC",
        replay: body.replay,
      },
    })
    return NextResponse.json(newIssue, { status: 200 })
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }
}

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } }
) {
  try {
    if (id) {
      const issue = await prisma.issueReplay.findFirst({
        where: {
          issue: id,
        },
      })
      if (issue) {
        return Response.json(issue, { status: 200 })
      } else {
        return Response.json([], { status: 404 })
      }
    } else {
      throw new Error("Please add a valid params.")
    }
  } catch (err) {
    return NextResponse.json(err, { status: 400 })
  }
}
