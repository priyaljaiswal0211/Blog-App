import React from "react";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Priyal </b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ad
          natus cum obcaecati perspiciatis voluptates esse quo quidem debitis
          eos eveniet quam tempore autem ratione et rem eum minima, mollitia
          itaque voluptatem sit illo nam qui. Saepe enim deserunt quam. Quidem
          minus labore cupiditate veritatis architecto, magnam neque repellat
          ab, nobis consectetur nemo id dignissimos natus iure ratione dolor
          eligendi cum, quo earum! Quaerat eveniet nostrum cupiditate illum
          error dolorem nulla aperiam, minima sunt. Consequuntur expedita vel
          minima qui, nulla dicta debitis, quaerat veniam amet doloribus nam non
          deleniti repellat saepe! Iure dolores unde commodi itaque, iusto
          obcaecati vel molestias dicta dolorum repellat modi facere similique.
          Ullam similique, eveniet aliquam eius, est minima veritatis omnis
          itaque, quasi alias vitae cumque assumenda! Rem deserunt possimus enim
          odit quasi a eveniet et dolores? Rem fuga commodi nihil ullam ex vel
          soluta. Maiores incidunt magnam molestiae quaerat. Eos maiores eius in
          neque deserunt, distinctio voluptates blanditiis facilis tempore
          voluptatem iure, consequatur nisi. Culpa obcaecati et quia sequi
          adipisci molestias nobis placeat laborum harum. Placeat, ex dicta!
          
        </p>
      </div>
    </div>
  );
}
