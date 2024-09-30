import Nav from "@/components/organism/Nav/Nav"

export default function HomeLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className='flex w-full h-full flex-col'>
      <Nav />
      {children}
    </main>
  )
}