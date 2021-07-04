
function App() {
  return (
  <div className="wrapper clear"> 
  <header className="d-flex justify-between align-center">
    <div className="d-flex align-center">
    <img width={60} height={60} src="/logo23.jpg" /> 
    <div>
      <h3 className="text-uppercase">Phones trap</h3>
      <p className="opacity-5">Магазин смартфонов</p>
    </div>
    </div>
    <ul className="d-flex">
      <li className="mr-30"><img width={25} height={25} src="/img/cart.svg"/><span>12 565 грн.</span></li>
      <li><img width={18} height={18} src="/img/user.svg"/></li>
    </ul>
  </header>
    <div className="content p-40">
      <h1 className="mb-40">Все телефоны </h1>

      <div className="smartphones1 d-flex">
      <div className="card">
        <img width={130} height={120} src="/img/smartphones/Apple iphone 11 Pro 256GB Space Gray.jpg" alt="Smartphones"/>
        <h5>Apple iPhone 11 Pro 256GB Space Gray</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>15 890 грн.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
          </button>
        </div>
      </div>
      <div className="card">
        <img width={130} height={120} src="/img/smartphones/Apple iphone 12 Green.jpg" alt="Smartphones"/>
        <h5>Apple iPhone 12 Green</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>15 890 грн.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
          </button>
        </div>
      </div>
      <div className="card">
        <img width={130} height={120} src="/img/smartphones/Apple iphone 12 mini.jpg" alt="Smartphones"/>
        <h5>Apple iPhone 12 mini</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>15 890 грн.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
          </button>
        </div>
      </div>
      <div className="card">
        <img width={150} height={150} src="/img/smartphones/Apple iphone 12 Pro Max 256GB Graphite.jpg" alt="Smartphones"/>
        <h5>Apple iPhone 12 Pro Max 256GB Graphite</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>15 890 грн.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
          </button>
        </div>
      </div>
      </div>
      <div className="smartphones2 d-flex">
      <div className="card">
        <img width={130} height={120} src="/img/smartphones/Apple iphone 12.jpg" alt="Smartphones"/>
        <h5>Apple iPhone 12 Red</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>15 890 грн.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
          </button>
        </div>
      </div>
      <div className="card">
        <img width={130} height={120} src="/img/smartphones/Apple iPhone SE 2 (2020) 128GB White.jpg" alt="Smartphones"/>
        <h5>Apple iPhone SE 2 128GB White(2020)</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>15 890 грн.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
          </button>
        </div>
      </div>
      <div className="card">
        <img width={130} height={120} src="/img/smartphones/Apple iPhone Xs 512GB.jpg" alt="Smartphones"/>
        <h5>Apple iPhone Xs 512GB</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>15 890 грн.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
          </button>
        </div>
      </div>
      <div className="card">
        <img width={125} height={120} src="/img/smartphones/Apple-iPhone-11-Pro.jpg" alt="Smartphones"/>
        <h5>Apple iPhone 11 Pro</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Цена:</span>
            <b>15 890 грн.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
          </button>
        </div>
      </div>
      </div>
       </div>
    </div>
  
);
}

export default App;
