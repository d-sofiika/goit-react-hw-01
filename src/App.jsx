import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "../src/components/Profile/userData.json";


import FriendList from "./components/Friends/FriendList";
import friends from "./components/Friends/friends.json"


const App = () => {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        img={userData.img}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
    </>
  );
};

export default App;
