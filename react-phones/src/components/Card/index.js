import React from 'react';
import cardStyles from './Card.module.scss';


function Card({ id,onFavorite, imageUrl , title , price , onPlus ,favorited=false}) {
  
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const onClickPlus = () => {
    onPlus({title, price , imageUrl});
    setIsAdded(!isAdded);

  };
  const onClickFavorite = () => {
    onFavorite({ id,title, price , imageUrl});
    setIsFavorite(!isFavorite);
  };
    return (
        <div className={cardStyles.card}>
        <div className={cardStyles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? '/img/bookmark-liked.svg' : '/img/bookmark-unliked.svg'} alt="unLiked"/>
        </div>
         <img width={130} height={120} src={imageUrl} alt="Smartphones"/>
         <h5>{title}</h5>
         <div className="d-flex justify-between align-center">
           <div className="d-flex flex-column">
             <span>Цена:</span>
             <b>{price} грн.</b>
           </div>
           <button className="button" onClick={onClickPlus}>
             <img src={isAdded ? '/img/btn-checked.svg' : '/img/plus.svg'} alt="Plus"/>
           </button>
         </div>
       </div>
    )
}

export default Card;