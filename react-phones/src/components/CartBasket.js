
function CartBasket() {

    return (
        <div style={{display: 'none'}} className="cart-basket-shadow">

        <div className="cartBasket">
      <h2 className="d-flex justify-between mb-30">Корзина<img className="removeBtn cu=p" src="/img/remove-btn.svg" alt="Remove"/></h2>

      <div className="items">
      <div className="cartItem d-flex align-center">
        <img className="mr-5" width={130} height={130} src="/img/smartphones/Apple iPhone 11 Pro 256GB Space Gray.jpg" alt="Smartphone"/>
      <div>
        <p className="mb-5">Apple iPhone 11 Pro 256GB Space Gray</p>
        <b>Цена 15 898 грн.</b>
      </div>
      <img className="removeBtn" src="/img/remove-btn.svg" alt="Remove"/>
      </div>

      <div className="cartItem d-flex align-center">
        <img className="mr-5" width={130} height={130} src="/img/smartphones/Apple iPhone 11 Pro 256GB Space Gray.jpg" alt="Smartphone"/>
      <div>
        <p className="mb-5">Apple iPhone 11 Pro 256GB Space Gray</p>
        <b>Цена 15 898 грн.</b>
      </div>
      <img className="removeBtn" src="/img/remove-btn.svg" alt="Remove"/>
      </div>
      <div className="cartItem d-flex align-center">
        <img className="mr-5" width={130} height={130} src="/img/smartphones/Apple iPhone 11 Pro 256GB Space Gray.jpg" alt="Smartphone"/>
      <div>
        <p className="mb-5">Apple iPhone 11 Pro 256GB Space Gray</p>
        <b>Цена 15 898 грн.</b>
      </div>
      <img className="removeBtn" src="/img/remove-btn.svg" alt="Remove"/>
      </div>
      </div>

      <div className="cartTotalBlock">
      <ul>
        <li>
          <span>Итого :</span>
          <div></div>
          <b>31 796 грн.</b>
        </li>
        <li>
        <span>Налог 5%:</span>
          <div></div>
          <b>1589.8 грн.</b>
        </li>
      </ul>
      <button>Оформить заказ</button>
      </div>
    </div>
    </div>
    )
}

export default CartBasket;