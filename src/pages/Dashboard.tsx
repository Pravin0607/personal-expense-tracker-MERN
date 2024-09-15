import MoneyCard from "@/components/MoneyCard";
import PieChart from "@/components/PieChart";
import LineChart from "@/components/LineChart";
import BarChart from "@/components/BarChart";
const Dashboard = () => {
    return (
        <div className="p-2 flex flex-col space-y-5">
            {/* <h1 className=' text-xl'>Dashboard</h1> */}
            <div className="grid grid-cols-1 gap-4  md:grid-cols-4">
                {/* <MoneyCard amount={100} title="Todays Total" /> */}
                {/* <MoneyCard amount={304000} title="This Month Total" /> */}
                {/* <MoneyCard amount={648200} title="This Year Total" /> */}
                <MoneyCard amount={68900480} title="Total Till" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">    
                <BarChart/>
                <PieChart/>
                <LineChart/>
            </div>
        </div>
    );
};

export default Dashboard;
