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
        <section className="grid gap-5 lg:grid-cols-6">
          <Card className="lg:col-span-6">
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
          <div className="relative lg:col-span-5">
            <div
              className="absolute top-0 h-full border-r-2 border-foreground"
              style={{ left: "7px" }}
            ></div>
            <ul className="m-0 list-none p-0">
              {replies &&
                replies.map((replay) => (
                  <li className="mb-5" key={replay.id}>
                    <div className="group flex items-center ">
                      <div className="z-10 h-4 w-4 rounded-[100%] border-2 border-foreground bg-foreground">
                        <div className="ml-3 mt-1 h-1 w-6  items-center bg-foreground"></div>
                      </div>
                      <div className="z-10 ml-4 flex-1">
                        <IssueReplay replay={replay} />
                      </div>
                    </div>
                  </li>
                ))}
              <li className="mb-5 ">
                <div className="group flex items-center ">
                  <div className="z-10 h-4 w-4 rounded-[100%] border-2 border-foreground bg-foreground">
                    <div className="ml-3 mt-1 h-1 w-6  items-center bg-foreground"></div>
                  </div>
                  <div className="z-10 ml-4 flex-1">
                    <Card>
                      <CardHeader>
                        <CardTitle>Reply On {issue?.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <IssueReplayForm issue={issue?.id} />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </li>
            </ul>
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
