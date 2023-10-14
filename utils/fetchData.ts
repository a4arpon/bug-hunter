import { IssueType, IssuesType } from "@/types/issue.type"

export const getIssues = async (): Promise<IssuesType[] | null> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/issues`,
      {
        cache: "no-store",
      }
    )
    const result = await response.json()
    return result
  } catch (err) {
    return null
  }
}

export const getIssue = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/issues/${id}`,
      {
        cache: "no-store",
      }
    )
    const issuePacket: IssueType = await response.json()
    if (issuePacket.issue && issuePacket.replies) {
      return { ...issuePacket }
    } else {
      return null
    }
  } catch (err) {
    return null
  }
}
