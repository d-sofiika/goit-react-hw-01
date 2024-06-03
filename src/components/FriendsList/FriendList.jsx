
import FriendListItem from "../FriendsListItem/FriendListItem";
import css from "./friendsList.module.css";


const FriendList = ({friends}) => {
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
