import Profile from "./profile/Frofile.jsx"
import Statistics from "./statistics/Statistics.jsx"
import FriendsList from "./friendList/FriendList.jsx"
import Transactions from "./transactions/Transactions.jsx"

import Seperator from "./seperator.jsx"

import user from "./profile/user.json"
import data from "./statistics/data.json"
import friends from "./friendList/friends.json"
import transactions from "./transactions/transactions.json"

export const App = () => {
  return (
    <div className="wrapper">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Seperator />
      <Statistics stats={data} />
      <Seperator />
      <FriendsList friends={friends} />
      <Seperator />
      <Transactions items={transactions} />
    </div>
  );
};
