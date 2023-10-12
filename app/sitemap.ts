import { MetadataRoute } from "next"
import { getIssues } from "../utils/fetchData"

export default async function sitemap(): Promise<MetadataRoute.Sitemap | []> {
  const publicIssues = await getIssues()
  const sitemapArray: MetadataRoute.Sitemap = []

  if (publicIssues) {
    for (let i = 0; i < publicIssues.length; i++) {
      sitemapArray.push({
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/issue/${publicIssues[i]?.id}`,
        lastModified: new Date(),
        priority: publicIssues.length - i,
        changeFrequency: "hourly",
      })
    }
  }
  return sitemapArray
}
