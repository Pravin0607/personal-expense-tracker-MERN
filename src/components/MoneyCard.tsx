import { IndianRupee } from 'lucide-react'
import { Card, CardContent, CardFooter } from './ui/card'

type MoneyCardProps = {
    amount: number,
    title: string,
}

const MoneyCard = ({amount,title}:MoneyCardProps) => {
  return (
    <Card className='overflow-hidden'>
        <CardContent className='flex justify-center items-center py-2 h-20'>
            <span className='font-bold text-3xl text-orange-400 flex items-center'> <IndianRupee/>{amount}</span>
        </CardContent>
        <CardFooter className='border-t flex items-center justify-center text-lg py-1 font-bold dark:bg-slate-900 bg-gray-300 rounded-b-md'>
            {title}
        </CardFooter>
    </Card>
  )
}

export default MoneyCard