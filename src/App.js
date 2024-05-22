import MainNav from './components/MainNav.js';
import SectionCard from './components/SectionCard.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainNav />

      <section className='section mission-section'>
        <SectionCard 
          title="Our Mission" 
          text="In the wake of the pandemic, the urgent demand for educational technology skyrocketed. Yet, for many classrooms and small businesses, access to these vital tools remains a distant dream. Apps4Everyone emerged from the realization that bridging this gap is not just necessary, but critical for the future of learning and entrepreneurship."
        />
        <SectionCard
          title="Request App"
          text="We believe in fostering a community where everyone's voice is heard and needs are met. Whether you're a teacher seeking innovative classroom solutions, an entrepreneur striving to grow your business, or an individual eager to learn and create, Apps4Everyone is here for you."
        />
    </section>
    </div>
  );
}

export default App;
