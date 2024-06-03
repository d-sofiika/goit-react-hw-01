import "./App.css";
import Profile from "./components/Profile/Profile";
import userData from "../src/components/Profile/userData.json";


import FriendList from "./components/FriendsList/FriendList";
import friends from "./components/FriendsListItem/friends.json"

import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./components/TransactionHistory/transactions.json";

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
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
