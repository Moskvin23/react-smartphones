
function CartBasket({ onClose, items= [] }) {

    return (
        <div className="cart-basket-shadow">

        <div className="cartBasket">
      <h2 className="d-flex justify-between mb-30">
        Корзина <img onClick={onClose} className="removeBtn cu=p" src="/img/remove-btn.svg" alt="Close"/></h2>

      <div className="items">
      {
        items.map(obj=> <div className="cartItem d-flex align-center mb-20">
        <img className="mr-5" width={130} height={130} src={obj.imageUrl} alt="Smartphone"/>
      <div>
      <p className="mb-5">{obj.title}</p>
        <b>{obj.price} грн.</b>
      </div>
      <img className="removeBtn" src="/img/remove-btn.svg" alt="Remove"/>
      </div>)
      }
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