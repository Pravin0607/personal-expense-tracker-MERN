import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"

import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { setTheme,theme } = useTheme()

  return (
        <Button variant="outline" className="bg-background text-foreground w-full" size="icon" onClick={()=>{
          if(theme === "dark"){
            setTheme("light")
        }
        else
        {
            setTheme("dark")
        }
      }}>
          {theme === "dark" ? 
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />:
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        }
        </Button>
  )
}
