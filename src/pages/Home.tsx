import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center items-center gap-4 bg-background text-foreground">
      <div className="mx-auto">
        <h1 className="text-4xl font-bold text-center font-mono underline">Personal Expense Tracker</h1>
      </div>
      <div className="flex gap-3">
        <Link to="/dashboard">
        <Button>Dashboard</Button>
        </Link>
        <Link to="/login">
        <Button>Login</Button>
        </Link>
        <Link to="/signup">
        <Button>Signup</Button>
        </Link>
      </div>
    </div>
  )
}

export default Home