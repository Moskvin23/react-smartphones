import Card from '../components/Card';

function Favorites({items, onAddToFavorites}) {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>

      <div className="smartphones1 d-flex flex-wrap">
      {items.map((item,index) => (
            <Card
              key={index}
              favorited={true}
              onFavorite ={onAddToFavorites}
              { ... item}
            />
          ))}
      </div>
    </div>
  );
}

export default Favorites;
