import SidebarMobile from "./sidebar-mobile"

const Header = () => {
  return (
    <div className="flex items-center gap-3 border-b pb-1 p-2 bg-background fixed w-full shadow-md ">
        <SidebarMobile/>
        <h1 className="text-2xl font-bold bg-background text-foreground">
        Header
            </h1>
        
        </div>
  )
}

export default Header