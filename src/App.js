// components
import Profile from "./components/Profile/Profile.jsx";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

// data
import user from "./components/data/user.json";
import statisticalData from "./components/data/statistical-data.json";
import friends from "./components/data/friends.json";
import transactions from "./components/data/transactions.json";

const App = () => {
  return (
    <div className="App">
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
     <Statistics title="Upload stats" stats={statisticalData}/>
     <Statistics stats={statisticalData} />
     <FriendList friends={friends} />    
     <TransactionHistory items={transactions} />
    </div>
  )
}

export default App;