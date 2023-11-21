export default function Form({submithandle, changehandle, fruitnew}){
    return <form action="submit" onSubmit={submithandle}>
    <input onChange={changehandle} value={fruitnew} type="text" placeholder="Ajouter un fruit...."/>
    <button>Ajouter</button>
  </form>
}