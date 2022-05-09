import React from "react";
import nature from "../../asserts/imgages/nature.jfif";

const Post = () => {
  return (
    <div className="postContainer">
      <img src={nature} className="postImg" alt="image" />
      <div className="postInfo">
        <div className="postCates">
          <span>Life</span>
          <span>music</span>
        </div>
        <p className="postTitle">Lorem ipsum dolor sit amet</p>
        <p className="postDate">1 hour ago</p>
        <p className="postDesc">
          Lorem ipsum dolor sit amet, no vocent accusata cum. Altera
          suscipiantur ea mea, case posse dolore eum ea. Et duo erat nominavi
          tincidunt, te reque lorem nullam mel. Cu magna adhuc omnium has, minim
          mazim denique ei duo, facer equidem te nam. Qui no tantas possim
          eloquentiam, ea liber decore mei. Per iuvaret expetendis at, eu
          alienum sapientem salutatus vim.
        </p>
      </div>
    </div>
  );
};

export default Post;
