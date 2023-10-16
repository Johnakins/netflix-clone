import { signOut } from "next-auth/react"
import { getServerSession } from 'next-auth/next'
import { authOptions } from "./api/auth/[...nextauth]/route"
import { redirect } from "next/navigation.js"

export default async function Home() {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/auth')
  }
  return (
    <>
      <h1 className="text-2xl text-green-500">Netflix clone</h1>
    </>

  )
}
