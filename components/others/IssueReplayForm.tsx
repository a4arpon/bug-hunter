"use client"

import { issueReplaySchema } from "@/validators/createIssueSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import MarkdownEditor from "@uiw/react-markdown-editor"
import axios from "axios"
import { Send } from "lucide-react"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { useToast } from "../ui/use-toast"

type IssueReplayForm = {
  issue: string
  replay: string
}

const IssueReplayForm = ({ issue }: { issue: string }) => {
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
  const handleFormSubmit = async (data: IssueReplayForm) => {
    if (data?.replay === "# Write your replay here.") {
      toast({
        description:
          "Please use this application when you have a deep understating on it. Otherwise you can leave.",
      })
    } else {
      if (data?.issue && data?.replay) {
        try {
          setLoading(true)
          const response = await axios
            .post(`/api/issues/${issue}/replies`, data)
            .then((res) => res.data)
          if (response) {
            setLoading(false)
          }
        } catch (err) {
          toast({
            description: "Uh-oh! Issue replying problem. Please try again.",
          })
        }
      }
    }
  }
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <input
        type="text"
        className="hidden"
        {...register("issue")}
        value={issue}
      />
      <Controller
        name="replay"
        control={control}
        defaultValue="# Write your replay here."
        render={({ field }) => (
          <MarkdownEditor className="min-h-[10rem] text-lg" {...field} />
        )}
      />
      <p>{errors?.replay?.message}</p>
      <div className="mt-6 flex justify-end">
        <Button disabled={loading}>
          Replay <Send />
        </Button>
      </div>
    </form>
  )
}

export default IssueReplayForm
