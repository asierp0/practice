import './App.css'

function App() {

    const name: string = "Aaron";

    function Greeting({ name }: {name: string}){
      return(
        <h1>Greetings! {name}</h1>
      )
    }

  return (
    <div>
      <Greeting name = {name}/>
    </div>
  )
}
export default App
