import { useEffect, useState } from 'react';
import { HelloComponent } from '../components/HelloComponent';
import { NavbarComponent } from '../components/Navbar';
import { InserisciPersonaForm } from '../components/InserisciPersonaForm';
import { HelloAnimal } from '../components/HelloAnimal';
import { history } from '../utils/history';
import { useUtente } from '../contexts/utente.context';

function Homepage() {

  const[listaNome,setListaNome]=useState([
    { id:1, nome:"SIMONE", cognome:"Verdi"},
    { id:2, nome:"GIANNI", cognome:"Rossi"},
    { id:3, nome:"LUCA", cognome:"Neri"}
  ]);  
  const[listaAnimali,setListaAnimali]=useState([
    {razza: "Cane", nome: "Pippo"},
    {razza: "Gatto", nome: "Oliver"},
    {razza: "Criceto", nome: "Fuffi"}
  ]);

  const[edit,setEdit] = useState(false);
  const[nome,setNome] = useState("");
  const[cognome,setCognome] = useState("");
  const[id,setId] = useState("");

  const onChange=(e)=>
  {
    if(e.target.name==="nome")
    setNome(e.target.value)
    else if(e.target.name==="cognome")
    setCognome(e.target.value)
  }

  const pulisciInput = () => 
  {
    setNome("")
    setCognome("")
  }

  const stampaPersona=()=> 
  {
    console.log(nome)
    console.log(cognome)
    var id = Math.floor(Math.random()*1000);
    console.log(id)
    var nuovaPersona={id:id, nome:nome, cognome:cognome}
    setListaNome([...listaNome,nuovaPersona])
    pulisciInput()
  }

  const eliminaPersona=(id)=>
  {
    setListaNome(listaNome.filter(persona=>persona.id!==id))
    console.log(id)
  }

  const modificaPersona=(id)=>
  {
    var persona = listaNome.filter(persona=>persona.id===id)[0];
    setNome(persona.nome)
    setCognome(persona.cognome)
    setId(persona.id)
    setEdit(true)
  }

  const updatePersona=(id)=>
  {
    var nuovaPersona = {id:id, nome:nome, cognome:cognome}
    setListaNome(listaNome.map(persona=>
      persona.id === id ? persona=nuovaPersona : persona))
  }

  // IL ? SERVE PER FAR CAPIRE AL PROGRAMMA CHE L'OPERAZIONE DA FARE DOPO (".success"), 
  // DEVE ESSERE EFFETTUATA SOLAMENTE SE L'OGGETTO PRIMA è PRESENTE, ALTIMENTI NON FA NULLA
  useEffect(() => {
    if(!JSON.parse(localStorage.getItem("Utente"))?.success) {
      history.push("/login")
    }
  }, []);

  const{ utenteState, dispatch} = useUtente();

  return (
    <>
    <NavbarComponent></NavbarComponent>

    <h1>{utenteState.utente}</h1>
  <h1>BENVENUTO {utenteState?.utenteLog?.username??"NESSUNO"}</h1>

    {listaNome.map(elemento=>
      <HelloComponent 
      eliminaPersona={eliminaPersona} 
      modificaPersona={modificaPersona}
      id={elemento.id} nome={elemento.nome} cognome={elemento.cognome}/>)}
      {listaAnimali.map(animale=>
        <HelloAnimal razza={animale.razza} nome={animale.nome}/>)}
        <InserisciPersonaForm id={id} nome={nome} cognome={cognome} 
        onChange={onChange} mostraPersona={stampaPersona} 
        updatePersona={updatePersona} edit={edit}/>
      </>

  //   <>
  //  <HelloComponent nome="Simone"></HelloComponent>
  //  <HelloComponent nome="Raffaele"></HelloComponent>
  //  <HelloComponent nome="Alessandro"></HelloComponent>
  //   </>
 );
}

export default Homepage;