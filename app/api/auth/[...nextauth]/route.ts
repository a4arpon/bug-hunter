// import CredentialsProvider from "next-auth/providers/credentials"
// import GitHubProvider from "next-auth/providers/github"
// export const authOption = {
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID || "",
//       clientSecret: process.env.GITHUB_SECRET || "",
//     }),
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "text",
//           placeholder: "Enter your email.",
//         },
//       },
//     }),
//   ],
// }

import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json("Hello World", { status: 200 })
}
