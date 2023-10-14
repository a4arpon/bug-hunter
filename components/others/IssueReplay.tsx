"use client"
import { ReplayType } from "@/types/replay.type"
import { Card, CardContent, CardHeader } from "../ui/card"
import DescPreview from "./DescPreview"

const IssueReplay = ({ replay }: { replay: ReplayType }) => {
  return (
    <Card>
      <CardHeader>
        <p>{new Date(replay.createdAt).toLocaleString()}</p>
      </CardHeader>
      <CardContent>
        <DescPreview text={replay.replay} />
      </CardContent>
    </Card>
  )
}

export default IssueReplay
