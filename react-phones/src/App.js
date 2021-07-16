import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import CartBasket from "./components/CartBasket";
import HomePage from "./pages/HomePage";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://60e81695673e350017c217ba.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://60e81695673e350017c217ba.mockapi.io/cartBasket")
      .then((res) => {
        setCartItems(res.data);
      });
      axios
      .get("https://60e81695673e350017c217ba.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://60e81695673e350017c217ba.mockapi.io/cartBasket", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(
      `https://60e81695673e350017c217ba.mockapi.io/cartBasket/${id}`
    );
    setCartItems((prev) => prev.filter((item) => item.id != id));
  };

  const onAddToFavorites = async (obj) => {
    try {
      if(favorites.find((favObj) => favObj.id == obj.id)) {
        axios.delete(
          `https://60e81695673e350017c217ba.mockapi.io/favorites/${obj.id}`);
          setFavorites((prev) => prev.filter((item) => item.id != obj.id));
      } else{
        const { data } = await axios.post("https://60e81695673e350017c217ba.mockapi.io/favorites", obj);
      setFavorites((prev) => [...prev, data]);
      }
  
    } catch (error) {
      alert('Не удалось добавить в фавориты');      
    }
    
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <CartBasket
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <Route path="/" exact>
        <HomePage
          items={items}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorites={onAddToFavorites}
          onAddToCart={onAddToCart}
        />
      </Route>

      <Route path="/favorites" exact>
        <Favorites items={favorites} onAddToFavorites={onAddToFavorites}/>
      </Route>
    </div>
  );
}

export default App;
