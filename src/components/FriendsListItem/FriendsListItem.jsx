import style from "./FriendsListItem.module.css";

function FriendsListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={style.item} key={id}>
      <span className={isOnline ? `${style.status} ${style.active}` : `${style.status} ${style.notactive}`}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
}

export default FriendsListItem;
