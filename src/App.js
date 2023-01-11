import Header from './components/Header/Header';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './styles/App.scss';
import Popular from './components/Popular/Popular';
import Brands from './components/Brands/Brands';
import Newcomer from './components/Newcomer/Newcomer';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';
import Card from './components/Card/Card';

function App() {
  return (
    <BrowserRouter className="App">
        <Navbar/>
        <Header/>
        <main>
            <Popular/>
            <Brands/>
            <Newcomer/>
            <Slider/>
            <Join/>
        </main>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
