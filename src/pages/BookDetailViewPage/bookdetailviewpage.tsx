import BookDetailView from "../../components/organisms/BookDetail/BookDetailView";
import Footer from "../../components/molecules/Footer/footer";
import Header from "../../components/organisms/Header/header";
import React from "react"


interface Props {}

const BookDetailViewPage = (props: Props) => {
  return (
    <>
      <Header />
      <BookDetailView />
      <Footer />
    </>
  );
};

export default BookDetailViewPage;
