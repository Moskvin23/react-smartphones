import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="">
        <div className="d-flex align-center">
          <img width={60} height={60} src="/logo23.jpg" alt="logo" />
          <div>
            <h3 className="text-uppercase">Phones trap</h3>
            <p className="opacity-5">Магазин смартфонов</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-20 cu-p">
          <img width={20} height={20} src="/img/cart1.svg" alt="basket" />
          <span className="mr-10"> 12 565 грн.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img
              width={20}
              height={20}
              src="/img/bookmarks-head.svg"
              alt="bookmarks"
            />
          </Link>
        </li>
        <li className="mr-20 cu-p">
          <img width={20} height={20} src="/img/user1.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}
export default Header;
