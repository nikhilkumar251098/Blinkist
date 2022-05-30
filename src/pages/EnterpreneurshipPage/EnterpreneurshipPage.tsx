import Footer from "../../components/molecules/Footer/footer";
import Header from "../../components/organisms/Header/header";
import SelectedPage from "../../components/organisms/SelectedPage/SelectedPage";
import React from "react"


interface Props {}

const EnterpreneurshipPage = (_props: Props) => {
  return (
    <>
      <Header />
      <SelectedPage />
      <Footer />
    </>
  );
};

export default EnterpreneurshipPage;
