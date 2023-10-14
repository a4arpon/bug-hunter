import prisma from "@/prisma/client"

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id
  try {
    if (id) {
      const issue = await prisma.issue.findFirst({
        where: {
          id: id,
          privacy: "PUBLIC",
        },
      })
      const replies = await prisma.issueReplay.findMany({
        where: {
          issue: id,
        },
      })
      if (issue) {
        return Response.json({ issue, replies }, { status: 200 })
      } else {
        return Response.json("No issue found on server.", { status: 404 })
      }
    } else {
      throw new Error("Please add a valid params.")
    }
  } catch (err) {
    return Response.json(err, { status: 400 })
  }
}
