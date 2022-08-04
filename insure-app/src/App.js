import './App.css';
import Nav from './parts/Nav.js';
import Banner from './parts/Banner.js';
import CardIndex from './parts/CardIndex.js';
import Cadastra from './parts/Cadastra.js';
import Footer from './parts/Footer.js';

function App() {
  return (
    <div className="App">
        <Nav />
        <Banner />
        <CardIndex />
        <Cadastra />
        <Footer />
    </div>
  );
}

export default App;
