import Student from "./Student.jsx";

function App() {
  return (
    //student is the child and App is the parent
     <>
      {/* now you can reuse the same component but with different data */}
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />

      {/* this doesn't any props, it uses the default values instead*/}
      <Student/>
    </>
  );
}

export default App
