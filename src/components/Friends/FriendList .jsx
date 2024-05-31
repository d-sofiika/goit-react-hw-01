import css from "../Friends/friends.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((person) => (
        <li key={person.id}>
          <img src={person.avatar} alt="Avatar" />
          <span>{person.name}</span>
          <span>{person.isOnline ? "Online" : "Offline"}</span>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
