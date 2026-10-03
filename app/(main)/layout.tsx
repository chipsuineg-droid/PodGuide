import { Sidebar } from "@/components/shared/navigation/Sidebar"
import { TopBar } from "@/components/shared/navigation/TopBar"
import { BottomNav } from "@/components/shared/navigation/BottomNav"

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      <div className="hidden lg:flex h-full flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col h-full overflow-hidden min-w-0">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 pb-20 lg:pb-8">
          {children}
        </main>
      </div>
      <BottomNav />
    </div>
  )
}