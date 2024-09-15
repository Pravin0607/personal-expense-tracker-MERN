import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";
import { Navitem } from "@/lib/types";

const SidebarItem = ({ path, name, icon: Icon }: Navitem) => {
    return (
        <li>
            <Link className='w-full hover:bg-gray-200 dark:hover:text-black px-2 py-1 flex items-center gap-3 rounded-md' to={path}>
                <Icon size={30} />
                <span>{name}</span>
            </Link>
        </li>
    );
};

type SidebarContentProps = {
    Navitems: Navitem[];
};

const SidebarContent = ({ Navitems }: SidebarContentProps) => {
    return (
        <div className='flex flex-col justify-between h-full bg-background text-foreground rounded-b-md'>
            <div className="bg-background text-foreground">
                <ul className='h-full flex flex-col gap-3 ' role='navigation'>
                    {Navitems.map((item, index) => (
                        <SidebarItem path={item.path} icon={item.icon} name={item.name} key={index} />
                    ))}
                </ul>
            </div>
            <div className="">
                <ModeToggle />
            </div>
        </div>
    );
};

export default SidebarContent;