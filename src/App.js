import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import BookList from './components/BookList';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
