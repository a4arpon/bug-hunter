"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { createIssueSchema } from "@/validators/createIssueSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import "@uiw/react-markdown-editor/markdown-editor.css"
import axios from "axios"
import { AlertTriangle } from "lucide-react"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"

const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false }
)

type IssueForm = z.infer<typeof createIssueSchema>

const NewIssuePage = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  })
  const [loading, setLoading] = useState<boolean>(false)
  const { toast } = useToast()
  const formHandler = async (data: IssueForm) => {
    if (data?.title && data.description) {
      setLoading(true)
      await axios
        .post("/api/issues", data)
        .then((res) => {
          toast({
            title: "Oops, you've done it now!",
            description:
              "You've just added another issue. Just kidding! Thanks for contributing to our ever-growing list of challenges. Together, we'll conquer them all! 😄🙌📝",
          })
          router.push("/issues")
        })
        .catch((res) => {
          toast({
            description: "Uh-oh! Issue creation problem. Please try again.",
          })
          setLoading(false)
        })
    } else {
      toast({
        title: "Alert",
        description:
          "Don't leave fields empty! Please fill out all required information.",
      })
      setLoading(false)
    }
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(formHandler)}>
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Notice</AlertTitle>
        <AlertDescription>
          Title: 10-255 chars, Description: At least 30 chars. You need to write
          the issues in markdown syntax. <br /> Creating a public issue? Ensure
          your title is SEO-friendly for better visibility and engagement!
        </AlertDescription>
      </Alert>
      <Input
        placeholder="Enter The Issue Title. Please Provide the title meaningful."
        {...register("title", { required: true })}
      />
      {errors.title && (
        <p className="text-destructive">{errors.title.message}</p>
      )}
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <MarkdownEditor className="min-h-[30rem] text-lg" {...field} />
        )}
      />
      {errors.description && (
        <p className="text-destructive">{errors.description.message}</p>
      )}
      <div className="flex justify-end">
        <Button disabled={loading}>SUBMIT ISSUE</Button>
      </div>
    </form>
  )
}

export default NewIssuePage
