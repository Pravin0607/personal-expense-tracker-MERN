import CategoryForm from "@/components/CategoryForm"
import CategoryTable from "@/components/CategoryTable"

const Categories = () => {
  return (
    <div className="p-2 flex flex-col space-y-5">
      <CategoryForm/>
      <CategoryTable/>
    </div>
  )
}

export default Categories