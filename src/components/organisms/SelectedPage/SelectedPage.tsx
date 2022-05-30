import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import TypographyComponent from '../../atoms/Typography/TypographyComponent';
import Banner from '../../molecules/Banner/Banner';
import BookCard from '../../organisms/BookCard/bookcard';
import InputField from '../../molecules/InputField/inputfield';

const SelectedPage= () => {


  return (
    <Container data-testid="pageContent">
        <Banner />
        <Box width="300%" sx={{ mt: 8, display: 'flex' }}>
            <InputField url="images/search.png" alt="Search" text="Search by title or author" />
        </Box>
        <Box width="100%" sx={{ mt: 15 }}>
            <Box sx={{ mb:4 }}>
              <TypographyComponent variant="h1" children="Trending Blinks" color="textColors.highEmphasis" />
            </Box>
            <Grid container mt={1} sx={{margin: 'auto'}} spacing={6}>
            <BookCard type='trending' showFinished= {true}  />
        </Grid>
        <Box sx={{ mb:4 }}>
              <TypographyComponent variant="h1" children="Just Added" color="textColors.highEmphasis" />
          </Box>
            <Grid container mt={1} sx={{margin: 'auto'}} spacing={6}>
            <BookCard type='just added' showFinished= {true}  />
        </Grid>
        <Box sx={{ mb:4 }}>
          <TypographyComponent variant="h1" children="Featured Blinks" color="textColors.highEmphasis" />
        </Box>
      <Grid container mt={1} sx={{margin: 'auto'}} spacing={6}>
        <BookCard type='featured' showFinished= {true}  />
      </Grid>
  </Box>
    </Container>
  )
}

export default SelectedPage;