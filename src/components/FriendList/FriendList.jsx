import FriendsListItem from "../FriendsListItem/FriendsListItem";
import style from "./FriendList.module.css"

function FriendList({ friends }) {
  return (
    <ul className={style.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendsListItem
            key={id}
            avatar={avatar}
            isOnline={isOnline}
            name={name}
          />
        );
      })}
    </ul>
  );
}

export default FriendList;
