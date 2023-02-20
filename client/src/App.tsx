import React from "react"

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "./components/Layouts/Layout"
import styles from "./components/Layouts/Layout.module.css"

function App() {
    return (
        <div className={`App ${styles.layout}`}>
            <Layout />
        </div>
    )
}

export default App
