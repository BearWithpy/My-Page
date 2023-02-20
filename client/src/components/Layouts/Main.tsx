import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "../../pages/About"
import Contact from "../../pages/Contact"
import Home from "../../pages/Home"
import Project from "../../pages/Project"

import styles from "./Layout.module.css"

function Main() {
    return (
        <div>
            <main className={styles.main}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}>
                            {/* <Route path=":paramRoomCode" element={<Home />} /> */}
                        </Route>
                        <Route path="/aboutme" element={<About />} />
                        <Route path="/project" element={<Project />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </BrowserRouter>
            </main>
        </div>
    )
}

export default Main
