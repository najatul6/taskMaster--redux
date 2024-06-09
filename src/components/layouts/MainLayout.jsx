import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const MainLayout = () => {
  return (
    <div className="flex relative">
        <div className="w-[80px] fixed">
            <Sidebar/>
        </div>
        <div className="w-full ml-20">
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout