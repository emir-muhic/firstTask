import Restrict from "./Restrict"

const Dashboard = () => {
    return (
        <div>
            <div className="text-center text-4xl font-bold mt-20">Welcome to user dashboard</div>
            {/* Checking if the user is logged in */}
            <Restrict />
        </div>
    )
}

export default Dashboard