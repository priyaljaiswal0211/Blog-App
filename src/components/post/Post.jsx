// import React from 'react'
import "./post.css";

export default function Post({ img }) {
  return (
    <div className="post">
      <img className="postImg" src={img} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        distinctio culpa debitis dignissimos modi fugit laborum deleniti dolorum
        nobis sint possimus aut, ut pariatur eaque deserunt quisquam.
        Necessitatibus, quisquam nisi?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        distinctio culpa debitis dignissimos modi fugit laborum deleniti dolorum
        nobis sint possimus aut, ut pariatur eaque deserunt quisquam.
        Necessitatibus, quisquam nisi?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        distinctio culpa debitis dignissimos modi fugit laborum deleniti dolorum
        nobis sint possimus aut, ut pariatur eaque deserunt quisquam.
        Necessitatibus, quisquam nisi?
      </p>
    </div>
  );
}
