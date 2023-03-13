import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-item">
        <span className="side-bar-title">ABOUT ME</span>
        <img
          src="https://themes-themegoods.b-cdn.net/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          quas quam dolorum rerum accusantium non beatae minus commodi
          consequuntur! Atque distinctio id, veritatis soluta asperiores optio
          fugiat ad voluptatem quo!
        </p>
      </div>
      <div className="side-bar-item">
        <span className="side-bar-title">CATEGORIES</span>
        <ul className="side-bar-list">
          <li className="side-bar-list-item">Life</li>
          <li className="side-bar-list-item">Music</li>
          <li className="side-bar-list-item">Style</li>
          <li className="side-bar-list-item">Sport</li>
          <li className="side-bar-list-item">Tech</li>
          <li className="side-bar-list-item">Cinema</li>
        </ul>
      </div>
      <div className="side-bar-item">
        <span className="side-bar-title">FOLLOW US</span>
        <div className="side-bar-social">
          <i className="side-bar-icon fa-brands fa-facebook"></i>
          <i className="side-bar-icon fa-brands fa-twitter"></i>
          <i className="side-bar-icon fa-brands fa-pinterest"></i>
          <i className="side-bar-icon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
