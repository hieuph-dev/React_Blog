import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        className="post-img"
        src="https://themes-themegoods.b-cdn.net/grandblog/demo/wp-content/uploads/2015/07/22-960x640.jpg"
        alt=""
      />
      <div className="post-info">
        <div className="post-cats">
          <span className="post-cat">Music</span>
          <span className="post-cat">Life</span>
        </div>
        <span className="post-title">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="post-date">1 hour ago</span>
      </div>
      <p className="post-desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
        doloribus sint eaque nulla? Tenetur assumenda quam aspernatur, nulla
        consequuntur recusandae saepe alias cum, ipsum, at voluptate ut unde ab
        quos. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Dignissimos doloribus sint eaque nulla? Tenetur assumenda quam
        aspernatur, nulla consequuntur recusandae saepe alias cum, ipsum, at
        voluptate ut unde ab quos. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Dignissimos doloribus sint eaque nulla? Tenetur
        assumenda quam aspernatur, nulla consequuntur recusandae saepe alias
        cum, ipsum, at voluptate ut unde ab quos.
      </p>
    </div>
  );
};

export default Post;
