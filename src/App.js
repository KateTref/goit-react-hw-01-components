import Statistics from './components/Statistics/Statistics';
import Profile from './components/Profile/Profile';
import FriendsList from './components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import user from './components/Profile/user';
import data from './components/Statistics/data';
import friends from './components/FriendList/friends';
import items from './components/TransactionHistory/transactions';

export default function App() {
  return (
    <>
      <div className="container">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendsList friends={friends} />
        <TransactionHistory items={items} />
      </div>
    </>
  );
}
