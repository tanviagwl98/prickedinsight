import "./Blog.css";
//import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const BlogSection = ({ name, content, id, isVisible, setIsVisible, image }) => {
  const splitWords = content.split(" ");

  return (
    <div key={id} className="blogSection">
      <div className="blogHeader">
        <div className="leftSide">
          <h3 className="blogTitle">{name}</h3>
          {isVisible ? (
            <div className="content-btn">
              <p className="shortContent">{content}</p>
              <button className="showBtn" onClick={() => setIsVisible(false)}>
                {/* <KeyboardArrowUp /> */}
                Hide
              </button>
            </div>
          ) : (
            <div className="content-btn">
              <p className="shortContent">{content.split(" ").slice(0, 50).join(" ") + "..........."}</p>
              <button className="showBtn" onClick={() => setIsVisible(true)}>
                {/* <KeyboardArrowDown /> */}
                Show
              </button>
            </div>
          )}
        </div>
        <img src={image} alt="blogpic" className="blogImage" />
      </div>
    </div>
  );
};

export default BlogSection;
