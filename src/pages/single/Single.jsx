import React from 'react'
// import Post from '../../components/post/Post'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'
import "./single.css"

export default function Single() {
  return (
    <div className='single'>
        {/* <Post/> */}
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}
