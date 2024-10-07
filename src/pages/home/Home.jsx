// import React from 'react'
import "./home.css"
import Header from  "../../components/header/Header.jsx"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar.jsx"


export default function Home() {
  return (
    <>
        <Header />
        <div className="home">
            <Posts/>
            <Sidebar/>
        </div>
    </>
  )
}
