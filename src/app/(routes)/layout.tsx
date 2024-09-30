import Nav from "@/components/organism/Nav/Nav"
import Sidebar from "@/components/organism/Sidebar/Sidebar"

export default function HomeLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex w-full h-full">
      <Sidebar />
      <div className="content-container flex flex-col w-full">
        <Nav />
        {children}
      </div>
    </main>
  )
}