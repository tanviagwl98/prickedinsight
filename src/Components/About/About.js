import {useState} from "react";
import Creator from "../../Assets/user.jpg";
import AboutCard from "../../Views/TransparentCard/TransparentCard";
import "./About.css";
import { FormatQuoteRounded } from "@mui/icons-material";
import {about} from "../../config";

const About = () => {
  const [data] = useState(about);
  console.log(data, "Data for transparent Card");
  return (
    <>
    <div className="aboutContainer">
      <div className="introduction">
      <FormatQuoteRounded className="leftQuote" sx={{fontSize:40}}/>A Product Engineer by profession who loves to create poetry, write about
        life in general that how situations can break or make you, the author of Surrounding Thoughts and Unveil Life's Secret and a reader
        turned professional Book Reviewer.
        <FormatQuoteRounded sx={{fontSize:50, height:40}}/>
      </div>
      <img src={Creator} alt="creator" className="creator" />
    </div>
    <h1 className="headingTitle">
      Achievements
    </h1>
    <div className="cardContent">
    {data.map((card) => {
        return <AboutCard {...card} key={card.id}/>
    })    }
    </div>
    </>
  );
};

export default About;
