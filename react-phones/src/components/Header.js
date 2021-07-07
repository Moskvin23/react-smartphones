
function Header() {
    return (
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
        <img width={60} height={60} src="/logo23.jpg" /> 
        <div>
          <h3 className="text-uppercase">Phones trap</h3>
          <p className="opacity-5">Магазин смартфонов</p>
        </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30"><img width={20} height={20} src="/img/cart1.svg"/><span> 12 565 грн.</span></li>
          <li><img width={20} height={20} src="/img/user1.svg"/></li>
        </ul>
      </header> 
    )
}
export default Header;