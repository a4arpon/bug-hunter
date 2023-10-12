import Issue from "@/components/others/Issue"
import { Button } from "@/components/ui/button"
import { getIssues } from "@/utils/fetchData"
import { PlusIcon } from "lucide-react"
import Link from "next/link"

const IssuesPage = async () => {
  const issues = await getIssues()
  return (
    <>
      <div className="mb-5 flex justify-end">
        <Link href="/issues/new">
          <Button>
            <span>Create One</span> <PlusIcon />
          </Button>
        </Link>
      </div>
      <section className="flex flex-col gap-3">
        {issues && issues.map((item) => <Issue key={item.id} item={item} />)}
      </section>
    </>
  )
}

export default IssuesPage
