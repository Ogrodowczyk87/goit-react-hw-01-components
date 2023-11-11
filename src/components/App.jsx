import Profile from "./profile/Profile.jsx"
import Statistics from "./statistics/Statistics.jsx"
import FriendsList from "./friendList/FriendList.jsx"
import user from "./profile/user.json"
import data from "./statistics/data.json"
import friends from "./friendList/friends.json"

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
    </div>
  );
};
