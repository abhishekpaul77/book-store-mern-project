import { Button, Typography, Box, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../components/home.css";

const Home = () => {
  return (
    <div className="background">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Container>
        <div className="para">
          <p>
            Welcome to our MERN Book Storage App! We're thrilled to have you
            here. Our app is designed to be your personal haven for all things
            books. Whether you're an avid reader, a casual browser, or just
            looking to organize your reading list, we've got you covered. At its
            heart, our app is about making your reading journey as seamless and
            enjoyable as possible. We understand the joy of discovering new
            worlds through the pages of a book, and we wanted to create a space
            where you can curate your own literary adventure. From storing books
            you're eager to read to managing your personal library, our app is
            your virtual bookshelf. Our team has poured their passion for books
            and technology into every line of code, every design choice, and
            every feature. We believe that books have the power to inspire,
            educate, and entertain, and our mission is to make that experience
            even better. We're committed to providing you with a user-friendly
            platform that empowers you to take control of your reading journey.
            Whether you're looking to add titles to your 'To Be Read' list, keep
            track of your favorite authors, or simply immerse yourself in the
            world of books, we're here to help you make it happen. We're a group
            of dedicated individuals who believe in the magic of books and the
            endless possibilities they offer. Thank you for joining us on this
            exciting journey. As you explore our app and connect with fellow
            book enthusiasts, remember that you're part of a community that
            shares your passion. We're here to provide the tools you need to
            create your literary haven and make your reading dreams a reality.
            Happy reading!
          </p>
          
        </div>
        </Container>
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 10,background:"white:hover"}}
          variant="outlined"

        >
          <Typography variant="h3">View All Books</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
