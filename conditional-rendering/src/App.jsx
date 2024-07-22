import UserGreeting from "./UserGreeting.jsx";


function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} UserName='user name'/>
      <UserGreeting isLoggedIn={false} UserName='user name'/>
      <UserGreeting isLoggedIn={true}/>
    </>
  );

}

export default App
