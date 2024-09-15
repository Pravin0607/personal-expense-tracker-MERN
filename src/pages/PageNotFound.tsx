import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const PageNotFound = () => {
  return (
    <div className="flex h-screen justify-center items-center flex-col space-y-5">
        <h1 className="text-2xl font-bold italic">404 - Page Not Found!</h1>
        <Link to={'/'}>
        <Button>Take Me Back</Button>
        </Link>
    </div>
  )
}

export default PageNotFound