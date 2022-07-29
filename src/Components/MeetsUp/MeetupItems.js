import items from "./MeetupItems.module.css";
import FavoritesContext from '../../Store/favourite-context';
import { useContext } from 'react';
export default function MeetupItems(props) {
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite()
  return (
    
        <li className={items.item}>
            <div className={items.image}>
                <img src={props.image} alt={props.title}></img>
            </div>
            <div className={items.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={items.actions}>
                <button>{itemIsFavorite?"Remove from Favorites":"To Favorites"}</button>
            </div>
        </li>
    
  );
}