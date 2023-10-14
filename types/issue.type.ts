import { ReplayType } from "./replay.type"

export type IssuesType = {
  id: string
  title: string
  description: string
  status: string
  createdAt: Date
  updatedAt: Date
  privacy: string
}

export type IssueType = {
  issue: IssuesType
  replies: ReplayType[]
}
