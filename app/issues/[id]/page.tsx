import DescPreview from "@/components/others/DescPreview"
import IssueReplay from "@/components/others/IssueReplay"
import IssueReplayForm from "@/components/others/IssueReplayForm"
import LDSchema from "@/components/shared/JSON-LD"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getIssue } from "@/utils/fetchData"
import { Metadata, ResolvingMetadata } from "next"

export async function generateMetadata(
  { params: { id } }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const issuePacket = await getIssue(id)
  if (issuePacket) {
    const { issue, replies } = issuePacket
    return {
      title: `${issue.title.substring(0, 44)}... - Bug Hunter`,
      description: `How to solve this issue ${issue.title} With the help of Bug Hunter Community.`,
      openGraph: {
        title: "Bug Hunter: Simple and Standard Issue Tracking Solution.",
        description: `How to solve this issue ${issue.title} With the help of Bug Hunter Community.`,
        type: "article",
        publishedTime: new Date(issue.createdAt).toString(),
        images:
          "https://i.pinimg.com/originals/b7/53/99/b75399858a77a4ba579fdcda9128f12d.jpg",
        url: `https://bug-hunter.vercel.app/issues/${id}`,
      },
      alternates: {
        canonical: `https://bug-hunter.vercel.app/issues/${id}`,
        languages: {
          "en-US": `https://bug-hunter.vercel.app/issues/${id}`,
          "bn-BN": `https://bug-hunter.vercel.app/bn/issues/${id}`,
        },
        types: {
          "application/sitemap+xml":
            "https://bug-hunter.vercel.app/sitemap.xml",
        },
      },
    }
  } else {
    return {
      title: "Bug Hunter: Simple and Standard Issue Tracking Solution.",
      description:
        "Effortlessly manage issues, public & private, with Bug Hunter. Your YouTrack-inspired solution for efficient internal issue management.",
      openGraph: {
        title: "Bug Hunter: Simple and Standard Issue Tracking Solution.",
        description:
          "Effortlessly manage issues, public & private, with Bug Hunter. Your YouTrack-inspired solution for efficient internal issue management.",
        type: "article",
        publishedTime: "2023-01-01T00:00:00.000Z",
        images:
          "https://i.pinimg.com/originals/b7/53/99/b75399858a77a4ba579fdcda9128f12d.jpg",
        url: "https://bug-hunter.vercel.app/",
      },
      alternates: {
        canonical: "https://bug-hunter.vercel.app",
        languages: {
          "en-US": "https://bug-hunter.vercel.app",
          "bn-BN": "https://bug-hunter.vercel.app/bn/",
        },
        types: {
          "application/sitemap+xml":
            "https://bug-hunter.vercel.app/sitemap.xml",
        },
      },
    }
  }
}

const IssuePage = async ({ params: { id } }: { params: { id: string } }) => {
  const issuePacket = await getIssue(id)
  if (issuePacket) {
    const { issue, replies } = issuePacket
    let schemaAnsList = []
    for (let i = 0; i < replies.length; i++) {
      schemaAnsList.push({
        "@type": "Question",
        name: `How to solve this issue, ${issue?.title}`,
        acceptedAnswer: {
          "@type": "Answer",
          text: replies[i].replay,
        },
      })
    }
    const LDObject = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: schemaAnsList,
    }

    return (
      <>
        <section className="grid gap-5 lg:grid-cols-4">
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>{issue?.title}</CardTitle>
              <div className="pt-3 uppercase">
                <p>
                  Added On:{" "}
                  {issue?.createdAt &&
                    new Date(issue?.createdAt).toLocaleString()}
                </p>
                <p>Status: {issue?.status}</p>
              </div>
            </CardHeader>
            <CardContent>
              <DescPreview text={issue?.description || ""} />
            </CardContent>
          </Card>
          <div className="hidden lg:inline"></div>
          <div className="flex flex-col gap-5 lg:col-span-3">
            {replies &&
              replies.map((replay) => (
                <IssueReplay key={replay.id} replay={replay} />
              ))}

            <Card>
              <CardHeader>
                <CardTitle>Reply On {issue?.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <IssueReplayForm />
              </CardContent>
            </Card>
          </div>
        </section>
        <LDSchema schema={LDObject} />
      </>
    )
  } else {
    return <h1>no world</h1>
  }
}

export default IssuePage
