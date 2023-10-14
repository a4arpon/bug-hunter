import { string, z } from "zod"

export const createIssueSchema = z.object({
  title: z.string().min(10).max(255),
  description: z.string().min(30),
})

export const issueReplaySchema = z.object({
  issue: z.string().min(8),
  replay: string().min(10),
})
