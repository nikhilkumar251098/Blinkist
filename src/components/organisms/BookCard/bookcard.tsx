import { AccessTimeOutlined,PersonOutlined } from "@mui/icons-material";
import { Card, CardMedia, Box, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import React, { useState, useEffect } from "react";
import TypographyComponent from "../../atoms/Typography/TypographyComponent";
import FilledButton from "../../molecules/FilledButton/filledbutton";
import axios from "axios";
import { Link } from "react-router-dom";

interface CardProps {
  showAdd?: boolean;
  showFinished?: boolean;
  showReadAgain?: boolean;
  status?: 'reading' | 'finished';
  type?: string;
}

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

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  height: "5%",
});

const IconBoxContainer = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

const IconBox = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
});

interface ButtonProps {
  status?: string;
  onClick: Function;
}

const ButtonComponent = ({ status, onClick}: ButtonProps) => {
  if (status === undefined) {
    console.log("status",status)
    return (
      <div>
      <FilledButton children="Add to Library" />
      </div>
    )
  }

  return (
    <Box  style={{ marginTop:"10px", width:"100%",  display:"flex", justifyContent:"center"}}> 
      <TypographyComponent  onClick={onClick} color="blue"  variant="body1">{
        status === 'reading' ? "Finished" : 'Read Again'
      }</TypographyComponent>
    </Box>
  )
}


const BookCard: React.FC<CardProps> = ({status, type} ) => {
  const [books, setBooks] = useState<StateProps[]>([])
  let setStatus
  
  const fetchBooks=async () => {
    const  response  = await axios.get(`http://localhost:3005/books`)
    return response.data;
  }

  useEffect(() => { 
    fetchBooks().then(response => {
      setBooks(response);
      })
    console.log("books=",books)
  }, [])
  
  const handleFinished =async (id:string, stat:string | undefined) => {
    setStatus= (stat === 'reading') ? 'finished' : 'reading';
    const { data } = await axios.patch(`http://localhost:3005/books/${id}`, { status: setStatus})
    console.log('data', data);
    fetchBooks().then(response => {
      setBooks(response);
    })
  }

    
  return (
    <Box data-testid="bookCard" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px'}}>
      {
         books.filter(item => (item.status !== undefined && item.status === status) || (item.type === type)).map(book => {
            return (
              <Card
                sx={{
                  width: '320px',
                  border: "1px solid #E1ECFC",
                  bgcolor: "background.default",
                  cursor: "pointer",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                  "&:hover": { bgcolor: "background.paper" },
                }}
              >
          
              <CardMedia component="img" src={book.img} sx={{ width: "101%" }} />
              <StyledCardContent sx={{ mt: 2 }}>
                <TypographyComponent variant="subtitle2" color="textColors.highEmphasis" children={book.bookName} />
                <Box sx={{ my: 1.5 }}>
                  <TypographyComponent variant="subtitle2" color="textColors.mediumEmphasis" children={book.bookAuthor} />
                </Box>
                <IconBoxContainer>
                  <IconBox>
                    <Box>
                      <AccessTimeOutlined sx={{ color: "textColors.mediumEmphasis", fontSize: "2vh", mr: 0.5, mt: "1px" }} />
                    </Box>
                    <TypographyComponent variant="caption" color="textColors.mediumEmphasis" children={book.time} />
                  </IconBox>
                  {book.reads && (
                  <IconBox>
                    <PersonOutlined
                      sx={{ color: "textColors.mediumEmphasis", fontSize: "2vh" }}
                    />
                    <TypographyComponent variant="caption" color="textColors.mediumEmphasis" children={book.reads} />
                  </IconBox>
                  )}
                </IconBoxContainer>
                {
                  (status !== undefined) ? <ButtonComponent onClick={() => handleFinished(book.id,book.status)} status={book.status} />
                  :
                  <Link to={`/detail/${book.id}`} >
                  <FilledButton children="Add to Library" />
                  </Link>
                }
                  </StyledCardContent>
              </Card>
            )
          })
      }
    </Box>
  );
};

export default BookCard;