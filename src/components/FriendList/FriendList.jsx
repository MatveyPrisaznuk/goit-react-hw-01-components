import FriendsListItem from "../FriendsListItem/FriendsListItem";

function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendsListItem
            key={id}
            avatar={avatar}
            status={isOnline}
            name={name}
          />
        );
      })}
    </ul>
  );
}

export default FriendList;
