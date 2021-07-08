
import Card from './components/Card';
import Header from './components/Header';
import CartBasket from './components/CartBasket';


const arr = [
  {
    title: 'Apple iphone 11 Pro 256GB Space Gray' , 
    price: 15890 , 
    imageUrl: '/img/smartphones/Apple iPhone 11 Pro 256GB Space Gray.jpg',
  },
  {
    title: 'Apple iphone 12 Green' ,
    price: 13350,
    imageUrl: '/img/smartphones/Apple iPhone 12 Green.jpg',
    },            
  {
    title: 'Apple iphone 12 mini',
    price: 13850,
    imageUrl: '/img/smartphones/Apple iPhone 12 mini.jpg',
  },
  {
    title: 'Apple iphone 12 Pro Max 256GB Graphite' , 
    price: 18990 , 
    imageUrl: '/img/smartphones/Apple iPhone 12 Pro Max 256GB Graphite.jpg',
  },            
];


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
      {arr.map((obj) => (
      <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl}/>
      ))}
      </div>
       </div>
    </div>
  
);
}

export default App;
