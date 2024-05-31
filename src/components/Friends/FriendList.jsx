
import FriendListItem from "./FriendListItem";
import css from "./friends.module.css";
import friends from "./friends.json";

const FriendList = () => {
  return (
    <ul className={css.friendList}>
      {friends.map((person) => (
        <FriendListItem 
          key={person.id} 
          avatar={person.avatar} 
          name={person.name}
          isOnline={person.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
