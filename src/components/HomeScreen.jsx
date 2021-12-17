import { useState } from "react"


import Transition from "./Transition"
import useBreakpoint from "../hooks/useBrekpoint"


function HomeScreen() {

    const [isClosed, setIsClosed] = useState(false)

    const isStatic = useBreakpoint('sm')

    return (
        <div className="flex bg-gray-100">

            <Transition show={(isStatic || !isClosed)} 
                enter="transition-all duration-500" 
                enterFrom="-ml-64" 
                enterTo="ml-0" leave="transition-all duration-500" 
                leaveTo="-ml-64">
                <aside className="bg-white w-64 min-h-screen flex flex-col">
                    <div className="bg-white border-r border-b px-4 h-10 flex items-center">

                        <span className="text-blue py-2">
                            Application
                        </span>

                    </div>
                    <div className="border-r flex-grow">
                        <nav>
                            <ul>
                                <li className="p-3">
                                    <a href="#">Home</a>
                                </li>

                                <li className="p-3">
                                    <a href="#">Profile</a>
                                </li>

                                <li className="p-3">
                                    <a href="#">Portfolio</a>
                                </li>

                                <li className="p-3">
                                    <a href="#">Contact</a>
                                </li>

                                <li className="p-3">
                                    <a href="#">About</a>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </aside>
            </Transition>

            <main className="flex flex-grow flex-col min-h-screen">

                <header className="bg-white border-b h-10 flex items-center justify-center">

                    {
                        !isStatic && (

                            isClosed
                                ? (
                                    <button tabIndex="1"
                                        onClick={() => setIsClosed(false)}>Open</button>
                                )
                                : (
                                    <button tabIndex="1"
                                        onClick={() => setIsClosed(true)}>Close</button>
                                )

                        )
                    }



                    <div className="flex-grow flex items-center justify-between px-3">

                        <h1>Home</h1>
                        <button className="text-blue-700 underline">
                            Login
                        </button>

                    </div>

                </header>

            </main>
        </div>
    )
}

export default HomeScreen
