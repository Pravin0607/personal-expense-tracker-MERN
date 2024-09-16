import { Menu } from "lucide-react"
import SidebarContent from "./sidebar-content"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Navitems } from "@/lib/constants"

const SidebarMobile = () => {
  return (<Sheet>
   <SheetTrigger asChild>
        <div className="md:hidden">
          <Button className="bg-background text-foreground hover:bg-background">
            <Menu size={30} />
          </Button>
        </div>
      </SheetTrigger>
  <SheetContent side={'left'} className="w-[250px]">
    <SidebarContent Navitems={Navitems} />
  </SheetContent>
</Sheet>
  )
}

export default SidebarMobile