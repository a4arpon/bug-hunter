import { IssuesType } from "@/types/issue.type"
import { AlertTriangleIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { Card, CardHeader, CardTitle } from "../ui/card"

interface IssueProps {
  item: IssuesType
}

const Issue: React.FC<IssueProps> = ({ item }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{item?.title}</CardTitle>
        <div className="flex items-center justify-between pt-4">
          <div className="flex flex-col gap-2">
            <p>{new Date(item?.createdAt).toLocaleDateString()}</p>
            <div
              className={`h-fit w-fit rounded-lg px-2 py-1 text-xs font-semibold text-foreground dark:text-background ${
                item?.status === "OPEN"
                  ? "bg-[#FE214F] dark:text-foreground"
                  : item?.status === "IN_PROGRESS"
                  ? "bg-[#F8EC70]"
                  : "bg-[#A2F8CD]"
              }`}
            >
              {item?.status}
            </div>
          </div>
          <Link href={`/issues/${item?.id}`}>
            <Button size="sm">
              <span>Explode</span> <AlertTriangleIcon />
            </Button>
          </Link>
        </div>
      </CardHeader>
    </Card>
  )
}

export default Issue
