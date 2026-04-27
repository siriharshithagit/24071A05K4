import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import About from './pages/About';
import IssueBook from './pages/Issuebook';
import ReturnBook from './pages/Returnbook';
import BookCatalogue from './pages/BookCatalogue';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/issuebook" element={<IssueBook />} />
        <Route path="/returnbook" element={<ReturnBook />} />
        <Route path="/bookcatalogue" element={<BookCatalogue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;