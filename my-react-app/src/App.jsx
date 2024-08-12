import UserGreeting from "./UserGreeting.jsx";

function App() {
  return (
    //student is the child and App is the parent
    //when you change the isLoggedIn property, the display will change too
     <>
      <UserGreeting isLoggedIn={true} username="Nix" />
    </>
  );
}

export default App
