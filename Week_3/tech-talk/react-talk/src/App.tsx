
/*

//BEFORE: Siblings own state.

function SiblingOne(){
  const [name, setName] = useState("");
}

function SiblingTwo(){
  const [name, setName] = useState("");
}

function Parent(){

return(
  <SiblingOne />
  <SiblingTwo />
 )
}

//AFTER: Parent owns state. 

function Parent(){
  const [name, setName] = useState("");

  return(
    <SiblingOne name = {name} setName = {setName} />
    <SiblingTwo name = {name} />
  )
}

*/