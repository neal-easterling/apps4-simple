import MainNav from './components/MainNav.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <MainNav />
      <div id="main-frame" className="main-frame">
        <Hero />
      </div>
      <Footer />
    </div>
  );
}

export default App;
