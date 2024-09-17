import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "./ui/card";
import EditCategory from "./EditCategory";
import DeleteCategory from "./DeleteCategory";

const Categories=[
    {name:"Food"},
    {name:"Electronics"},
    {name:"Books"}
]

const CategoryTable = () => {
    return (
        <Card className='border-t lg:w-1/2 lg:mx-auto overflow-hidden'>
<CardContent className="p-0 ">
<Table>
                <TableHeader >
                    <TableRow >
                    <TableHead className="font-bold text-orange-400 text-base">Category Name</TableHead>
                    <TableHead className="font-bold text-orange-400 text-base w-[90px]">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="">
                    {Categories.map((cat,index)=>( <TableRow key={index} className="dark:odd:bg-gray-900 odd:bg-slate-300">
                        <TableCell className="">{cat.name}</TableCell>
                        <TableCell className="flex gap-2">
                            <EditCategory/>
                            <DeleteCategory/>

                        </TableCell>
                    </TableRow>))}
                </TableBody>
            </Table>
</CardContent>
        </Card>
    );
};

export default CategoryTable;
