import { Brain,ChartColumnDecreasing, Home, LibraryBig, Receipt } from "lucide-react";
import { Navitem } from "./types";

const Navitems:Navitem[]=[{
    name:"Home",
    path:"/dashboard",
    icon:Home
},
{
    name:"Categories",
    path:"categories",
    icon:LibraryBig
},
{
    name:"Expenses",
    path:"expenses",
    icon:Receipt
},
{
    name:"Reports",
    path:"reports",
    icon:ChartColumnDecreasing
},
{
    name:"Ai",
    path:"ai",
    icon:Brain
}
]

export {Navitems}