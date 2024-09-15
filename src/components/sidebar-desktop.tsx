import { Navitems } from "@/lib/constants"
import SidebarContent from "./sidebar-content"

const SidebarDesktop = () => {
  return (
    <nav className="h-screen w-[210px] hidden md:block fixed p-2 border-r">
      <SidebarContent Navitems={Navitems}/>
    </nav>
  )
}

export default SidebarDesktop