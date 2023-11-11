import Profile from "./profile/Profile.jsx"
import Statistics from "./statistics/Statistics.jsx"
import user from "./profile/user.json"
import data from "./statistics/data.json"

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
      <Statistics stats={data} />
    </div>
  );
};
