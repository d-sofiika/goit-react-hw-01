import css from "../Profile/profile.module.css";
import clsx from "clsx";

const Profile = ({ name, tag, location, img, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <div className={css.box}>
      <div className={css.boxInfo}>
        <img
          src={img}
                  alt="User avatar"
                  className={css.pictures}
        />
        <p className={css.name}>{name}</p>
        <p className={css.text}>{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.dataTitle}>Followers</span>
          <span className={css.data}>{followers}M</span>
        </li>
        <li className={clsx(css.item, css.itemLine)}>
          <span className={css.dataTitle}>Views</span>
          <span className={css.data}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.dataTitle}>Likes</span>
          <span className={css.data}>{likes}M</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
