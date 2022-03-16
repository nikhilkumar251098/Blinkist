import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LibraryPage from "./pages/LibraryPage/librarypage";
import EnterpreneurshipPage from "./pages/EnterpreneurshipPage/EnterpreneurshipPage";
import BookDetailViewPage from "./pages/BookDetailViewPage/bookdetailviewpage";

function App() {


  return (
      <div className="App" data-testid="app">
        <Router>
          <Routes>
            <Route path="/" element={<LibraryPage />} />
            <Route path="/selected" element={<EnterpreneurshipPage />} />
            <Route path="/detail/:id" element={<BookDetailViewPage />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;

