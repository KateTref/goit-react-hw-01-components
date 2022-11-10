import Profile from './components/Profile/Profile';
import user from './components/Profile/user';

export default function App() {
    return (
      <>
      <div className='container'>
      <Profile 
        username = {user.username}
        tag = {user.tag}
        location = {user.location}
        avatar = {user.avatar}
        stats = {user.stats}
        />
      </div>
        
       
      </>
    );
  }