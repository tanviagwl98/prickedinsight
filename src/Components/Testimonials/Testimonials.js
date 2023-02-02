import React, { useState } from "react";
import "../../Components/Testimonials/Testimonials.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { testimonials } from "../../config";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export const Testimonials = () => {
  const [testimonial] = useState(testimonials);
  //const [expanded, setExpanded] = React.useState({});

  // const handleExpandClick = (id) => {
  //   //setExpanded(expanded === id ? null : id);
  //   setExpanded({
  //     ...expanded,
  //     [id]: !expanded[id]
  //   });
  // };

  return (
    <div className="testimonial">
      {testimonial.map((testimonial) => {
        return (
          <Card sx={{ maxWidth: 300 }} className="cardItem" key={testimonial.id}>
            <CardHeader 
            title={testimonial.name} 
            subheader={testimonial.date}
            action={
              <div
                style={{
                  backgroundImage: `url(${testimonial.image})`,
                  height: "100px",
                  width: "100px",
                  backgroundSize: "cover",
                  backgroundPosition:"center",
                  borderRadius: "50%",
                  
                }}
              />
            }>

              
            </CardHeader>
            {/* <CardMedia component="img" image={testimonial.image} alt="User" className="testimonialImg" /> */}
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {testimonial.content}
              </Typography>
            </CardContent>
            {/* <CardActions>
              <ExpandMore
                expand={expanded[testimonial.id]}
                onClick={() => handleExpandClick(testimonial.id)}
                aria-expanded={expanded[testimonial.id]}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          
            <Collapse in={expanded[testimonial.id]} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>{testimonial.content}</Typography>
              </CardContent>
            </Collapse> */}
          </Card>
        );
      })}
    </div>
  );
};
