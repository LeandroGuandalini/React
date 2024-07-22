import Student from "./Student";

function App() {

  return(
    <>
      <Student name='SpongeBob' age={30} isStudent={true}/>
      <Student name='Patrick' age={42} isStuden={false}/>
      <Student name='Squidward' age={60} isStuden={false}/>
      <Student name='Sandy' age={30} isStuden={false}/>
      <Student name='Larry'/>
    </>
  );

}

export default App
