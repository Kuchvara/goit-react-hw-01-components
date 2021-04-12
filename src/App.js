import Profile from "./components/Profile.jsx";
import user from "./components/data/user.json";
import Statistics from "./components/Statistics";
import statisticalData from "./components/data/statistical-data.json";
import FriendList from "./components/FriendList";
import friends from "./components/data/friends.json";
import TransactionHistory from "./components/TransactionHistory";
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