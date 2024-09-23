import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import cardData from "./components/cardData";


function App() {
  const cardElements = cardData.map(card => {
      return <Card 
          key={card.id}
          card={card}
          />
  })
  return (
    <div className="App">
      <Navbar />
      <section className="card-list">
        {cardElements}
      </section>
    </div>
  );
}

export default App;
