"use client"

import { issueReplaySchema } from "@/validators/createIssueSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import MarkdownEditor from "@uiw/react-markdown-editor"
import { Send } from "lucide-react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { useToast } from "../ui/use-toast"

type IssueReplayForm = {
  issue_id: string
  replay: string
}

const IssueReplayForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IssueReplayForm>({
    resolver: zodResolver(issueReplaySchema),
  })
  const [loading, setLoading] = useState<boolean>(false)
  const { toast } = useToast()
  return (
    <form>
      <Controller
        name="replay"
        control={control}
        defaultValue="# Please replay here."
        render={({ field }) => (
          <MarkdownEditor className="min-h-[10rem] text-lg" {...field} />
        )}
      />
      <div className="mt-6 flex justify-end">
        <Button>
          Replay <Send />
        </Button>
      </div>
    </form>
  )
}

export default IssueReplayForm
