import React, { useState } from "react";
import "../../Components/Testimonials/Testimonials.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import User from "../../Assets/user.jpg";
import { testimonials } from "../../config";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const Testimonials = () => {
  const [testimonial] = useState(testimonials);
  const [expanded, setExpanded] = React.useState({});

  const handleExpandClick = (id) => {
    //setExpanded(expanded === id ? null : id);
    setExpanded({
      ...expanded,
      [id]: !expanded[id]
    });
  };

  return (
    <div className="testimonial">
      {testimonial.map((testimonial) => {
        return (
          <Card sx={{ maxWidth: 345 }} className="cardItem" key={testimonial.id}>
            <CardHeader title={testimonial.name} subheader={testimonial.date} />
            <CardMedia component="img" image={testimonial.image} alt="User" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {testimonial.content}
              </Typography>
            </CardContent>
            <CardActions>
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
            </Collapse>
          </Card>
        );
      })}
    </div>
  );
};
