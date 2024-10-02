'use client'
import Nav from "@/components/organism/Nav/Nav"
import Sidebar from "@/components/organism/Sidebar/Sidebar"
import { store } from "@/redux/store"
import { Provider } from "react-redux"

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
        <Provider store={store}>
          {children}
        </Provider>
      </div>
    </main>
  )
}