import React from "react";
import "./SinglePost.css";

const SinglePost = () => {
  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="single-post-img"
        />
        <h1 className="single-post-title">
          Lorem ipsum dolor sit amet.
          <div className="single-post-edit">
            <i className="single-post-icon fa-regular fa-pen-to-square"></i>
            <i className="single-post-icon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="single-post-info">
          <span className="single-post-author">
            Author: <b>Hieu Pham</b>
          </span>
          <span className="single-post-date">1 hour ago</span>
        </div>
        <p className="single-post-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          nihil enim vitae tenetur accusantium? Deserunt accusamus distinctio
          ipsam exercitationem ea voluptatem aliquid, velit architecto, odit
          neque consectetur possimus tempora incidunt? Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Perspiciatis nihil enim vitae
          tenetur accusantium? Deserunt accusamus distinctio ipsam
          exercitationem ea voluptatem aliquid, velit architecto, odit neque
          consectetur possimus tempora incidunt? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Perspiciatis nihil enim vitae tenetur
          accusantium? Deserunt accusamus distinctio ipsam exercitationem ea
          voluptatem aliquid, velit architecto, odit neque consectetur possimus
          tempora incidunt? Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Perspiciatis nihil enim vitae tenetur accusantium? Deserunt
          accusamus distinctio ipsam exercitationem ea voluptatem aliquid, velit
          architecto, odit neque consectetur possimus tempora incidunt? Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis nihil
          enim vitae tenetur accusantium? Deserunt accusamus distinctio ipsam
          exercitationem ea voluptatem aliquid, velit architecto, odit neque
          consectetur possimus tempora incidunt?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
