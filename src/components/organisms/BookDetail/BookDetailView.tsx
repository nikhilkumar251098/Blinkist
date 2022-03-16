import { Box, Container, Divider } from "@mui/material";
import BlinkData from "../../../assets/data/BlinkData.json";
import { Link,useParams } from "react-router-dom";
import { AccessTimeOutlined, ArrowForwardOutlined } from "@mui/icons-material";
import { styled } from "@mui/system";
import React,{ useEffect, useState } from "react";
import TypographyComponent from "../../atoms/Typography/TypographyComponent";
import FilledButton from "../../molecules/FilledButton/filledbutton";
import NavButton from "../../molecules/NavButton/navbutton";
import axios from "axios";

interface StateProps {
  id:string;
  img?: string;
  bookName?: string;
  bookAuthor?: string;
  time?: string;
  reads?: string;
  status?: string;
  type?: string;
}

const FlexContainer = styled(Container)({
  height: "60vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
});

const BookDetailView = () => {
  const { id } = useParams();
  console.log(id);
  const [book, setBooks] = useState<StateProps>({id: '0'})
  const getBooks=async () => {
    const { data } = await axios.get(`http://localhost:3005/books/${id}`)
     return data;
  }
  useEffect(() => { 
    getBooks().then(response => {
      setBooks(response);
    })
  console.log("books=",book)
  }, [])

  const handleFinished =async (bookid:string, status:string | undefined) => {
    const setStatus= (status === 'reading') ? 'finished' : 'reading';
    const { data } = await axios.patch(`http://localhost:3005/books/${bookid}`, { status: setStatus})
    console.log('data', data);
    getBooks().then(response => {
      setBooks(response);
    })
  }

  return (
    <Container sx={{ height: "80vh", mt: "8vh" }} data-testid="bookDetail">
      <FlexContainer>
        <Box>
          <TypographyComponent
            variant="body2"
            children={BlinkData.bookDetail.head}
            color="textColors.highEmphasis"
          />
        </Box>
        <Box sx={{display: "flex",flexDirection: "column",height: "20vh",justifyContent: "space-between"}}>
          <TypographyComponent
            variant="h1"
            children={book.bookName}
            color="textColors.highEmphasis"
          />
          <TypographyComponent
            variant="subtitle1"
            children={BlinkData.bookDetail.caption}
            color="textColors.highEmphasis"
          />
          <TypographyComponent
            variant="body1"
            children={book.bookAuthor}
            color="textColors.mediumEmphasis"
          />
          <Box sx={{display: "flex"}}>
            <AccessTimeOutlined
              sx={{color: "textColors.mediumEmphasis",fontSize: "2.5vh",mr: 0.5,mb: "10px"}}
            />
            <TypographyComponent
              variant="body2"
              children={book.reads}
              color="textColors.mediumEmphasis"
            />
          </Box>
        </Box>
        <Box sx={{ alignSelf: "flex-end", position: "absolute", mt: 8 }}>
          <img src={book.img} alt="Book" />
        </Box>
        <Box sx={{width: "50%",display: "flex",justifyContent: "space-between"}}>
          <FilledButton
            textColor="primary.500"
            children="Read now"
            bgcolor="background.default"
            isBorder={true}
            borderColor="black"
            textVariant="body1"
            hoverColor="primary.500"
            hoverTextColor="background.default"
          />
          <Link to="/" style={{ textDecoration: "none" }}>
            <FilledButton
              textColor="textColors.highEmphasis"
              children="Finished Reading"
              bgcolor="primary.300"
              textVariant="body1"
              onClick={() => handleFinished(book.id,book.status)}
            />
          </Link>
          <NavButton
            textColor="textColors.mediumEmphasis"
            textVariant="body1"
            children="Send to Kindle"
            postElement={<ArrowForwardOutlined fontSize="small" />}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "36vw",
          }}
        >
          <Box sx={{ display: "flex", mb: 3 }}>
            {BlinkData.bookDetail.buttons.map((button, index) => (
              <Box
                key={index}
                sx={{
                  borderBottomColor: button.borderColor,
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  width: "12vw",
                  cursor: "pointer",
                  pb: 1,
                }}
              >
                <TypographyComponent
                  variant="body2"
                  color={button.textColor}
                  children={button.name}
                />
              </Box>
            ))}
          </Box>
          <TypographyComponent
            variant="body2"
            children={BlinkData.bookDetail.summary}
            color="textColors.highEmphasis"
          />
        </Box>
      </FlexContainer>
      <Divider sx={{ width: "100%", mt: 10 }} />
    </Container>
  );
};

export default BookDetailView;
