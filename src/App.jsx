// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import "./App.css";

import transactions from "./transactions.json";
import data from "./data.json";
import friends from "./friends.json";
import user from "./user.json";
import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Pofile";
import Statistics from "./components/Statistics/Statistics";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />;
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </>
  );
}

export default App;
