
import Card from './components/Card';
import Header from './components/Header';
import CartBasket from './components/CartBasket';

function App() { 
  return (
  <div className="wrapper clear"> 
    <CartBasket />
    <Header />

 
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Все телефоны </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input placeholder="Поиск...."/>
        </div>
        </div>

      <div className="smartphones1 d-flex">
      <Card />
      <Card />
      <Card />
      </div>
       </div>
    </div>
  
);
}

export default App;
