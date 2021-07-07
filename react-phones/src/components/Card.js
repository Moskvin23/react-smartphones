function Card() {

    return (
        <div className="card">
        <div className="favorite">
        <img src="/img/bookmark-unliked.svg" alt="unLiked"/>
        </div>
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
    )
}

export default Card;