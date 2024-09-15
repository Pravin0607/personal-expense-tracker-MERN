import Header from "@/components/header"
import SidebarDesktop from "@/components/sidebar-desktop"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div className="flex">

      <SidebarDesktop/>

      <div className="flex-1 md:ml-[210px]">
        <Header/>

        <div className="bg-background text-foreground mt-[50px]">
        <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout