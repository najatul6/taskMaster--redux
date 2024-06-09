import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Tasks from "../pages/Tasks"
import Chats from "../pages/Chats"
import Settings from "../pages/Settings"
import Profile from "../pages/Profile"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                index:true,
                element:<Tasks/>
            },
            {
                path:"/chat",
                element:<Chats/>
            },
            {
                path:"/settings",
                element:<Settings/>
            },
            {
                path:"/profile",
                element:<Profile/>
            }

        ]
    }
])

export default routes