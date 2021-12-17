import { useState } from "react"

import useBreakpoint from "../hooks/useBrekpoint"
import Menu from "./Menu"



function HomeScreen() {

    const [isClosed, setIsClosed] = useState(true)

    const isStatic = useBreakpoint('sm')

    return (
        <Menu isClosed={isClosed} setIsClosed={setIsClosed} isStatic={isStatic}>

            <div className="flex flex-grow items-center justify-between px-3">
                <h1 className="text-lg">Home</h1>
                <button className="text-blue-700 underline">Log in</button>
            </div>

        </Menu>
    )


}

export default HomeScreen
