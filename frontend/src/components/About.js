import { Container } from "@mui/material";
import React from "react";
import '../components/about.css'


const About = () => {
  return (
    <div>
      <Container>
      
        <div className="team">
          <div className="member">
            <img src="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX17784655.jpg" alt="" />
          </div>
          <div className="member">
            <img src="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX17784655.jpg" alt="" />
          </div>
          <div className="member">
            <img src="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX17784655.jpg" alt="" />
          </div>
          <div className="member">
            <img src="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX17784655.jpg" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
