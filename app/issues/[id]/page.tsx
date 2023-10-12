import DescPreview from "@/components/others/DescPreview"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getIssue } from "@/utils/fetchData"
const IssuePage = async ({ params: { id } }: { params: { id: string } }) => {
  const issue = await getIssue(id)
  return (
    <section className="grid gap-5 lg:grid-cols-3">
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>{issue?.title}</CardTitle>
          <div className="pt-3 uppercase">
            <p>
              Added On:{" "}
              {issue?.createdAt && new Date(issue?.createdAt).toLocaleString()}
            </p>
            <p>Status: {issue?.status}</p>
          </div>
        </CardHeader>
        <CardContent>
          <DescPreview text={issue?.description || ""} />
        </CardContent>
      </Card>
    </section>
  )
}

export default IssuePage
