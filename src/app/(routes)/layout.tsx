import Nav from "@/components/organism/Nav/Nav"
import Sidebar from "@/components/organism/Sidebar/Sidebar"

export default function HomeLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex w-full h-screen">
      <Sidebar />
      <div className="content-container flex flex-col w-full h-full">
        <Nav />
        {children}
      </div>
    </main>
  )
}