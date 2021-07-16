import Card from "../components/Card";

function HomePage({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorites,
  onAddToCart,
}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все телефоны"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input onChange={onChangeSearchInput} placeholder="Поиск...." />
        </div>
      </div>

      <div className="smartphones1 d-flex flex-wrap">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item) => (
            <Card
              key={item.title}
              onFavorite={(obj) => onAddToFavorites(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              {... item}
            />
          ))}
      </div>
    </div>
  );
}

export default HomePage;
