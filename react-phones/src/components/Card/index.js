import cardStyles from './Card.module.scss';

console.log(cardStyles);


function Card(props) {
  
    return (
        <div className={cardStyles.card}>
        <div className={cardStyles.favorite}>
        <img src="/img/bookmark-unliked.svg" alt="unLiked"/>
        </div>
         <img width={130} height={120} src={props.imageUrl} alt="Smartphones"/>
         <h5>{props.title}</h5>
         <div className="d-flex justify-between align-center">
           <div className="d-flex flex-column">
             <span>Цена:</span>
             <b>{props.price} грн.</b>
           </div>
           <button className="button">
             <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
           </button>
         </div>
       </div>
    )
}

export default Card;