import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
import { Button } from './ui/button'

const categoryFormSchema = z.object({
    categoryName:z.string().min(3,{message:"Category name should be at least 2 character long."}).max(40,{message:"Category name should be at most 40 character long."})
});

const CategoryForm = () => {
    const form = useForm<z.infer<typeof categoryFormSchema>>({
        resolver: zodResolver(categoryFormSchema),
        mode:"onChange",
        defaultValues:{
            categoryName:""
        }
    });

    function onSubmit(data:z.infer<typeof categoryFormSchema>){
        console.log(data);
    }

  return (
    <div className='flex md:justify-center items-center'>
<Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex flex-col w-full md:w-1/2 items-center ">
        <FormField
          control={form.control}
          name="categoryName"
          render={({ field }) => (
            <FormItem className='w-full'>
              <FormControl>
                <Input placeholder="Enter Category" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button type="submit" className='w-max md:w-1/2 font-bold' size={'sm'}>Submit</Button>
      </form>
    </Form>
    </div>
  )
}

export default CategoryForm