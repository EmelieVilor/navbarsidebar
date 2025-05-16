import { useState } from 'react';
import Header from './Components/Header';
import MainPage from './Components/MainPage';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import './App.css';

function App() {
  const [page, setPage] = useState('/images/maingif.gif');

  return (
    <div className="App">
      <Header />

      <div className="container">

        <Sidebar setPage={setPage} />

        <MainPage page={page} />

  
      </div>

      <Footer />
    </div>
  );
}

export default App;