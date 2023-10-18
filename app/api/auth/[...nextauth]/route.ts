import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign Up",
      credentials: {
        username: {
          label: "email",
          type: "email",
          placeholder: "a4arpon@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = { id: "1", name: "Ethan", email: "a4arpon@gmail.com" }
        return user
      },
    }),
  ],
}
