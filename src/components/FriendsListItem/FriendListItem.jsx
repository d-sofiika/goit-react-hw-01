import css from "./friends.module.css";
import clsx from 'clsx'

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.personItem}>
      <div>
        <img className={css.picture} src={avatar} alt="Avatar" width="48" />
        <p className={css.name}>{name}</p>
        <p className={clsx(isOnline ? css.online : css.offlineClass)}>{isOnline ? "Online" : "Offline"}</p>
      </div>
    </li>
  );
};
export default FriendListItem;
