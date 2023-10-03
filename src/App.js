import react,{Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.css'



export default class App extends Component
{
constructor(props)
{
  super(props);
  this.state = {
    nombreUsuario : "Jorge",
    cosasPorhacer:[{action:"Alimento a mi mascota",done:false},
    {action : "Hacer tarea de Progrmacion web",done:true},
    {action:"Jugar futbol con mi mejor amigo",done:true},
    {action: "Realizar mis practicas de Redes",done:true},
    {action: "Lavar el patio de mi casa",done:false}],

    nuevaTarea: ""//Para que el usuario agregue nuevas tareas.
  }
}

actualizarListaQuehaceres =(evento) =>{
  this.setState({nuevaTarea :evento.target.value});
}
crearNuevatarea =() =>{

  if(!this.state.cosasPorhacer 
      .find(item => item.action === this.state.nuevaTarea))
      {
        this.setState({
          cosasPorhacer:[this.state.cosasPorhacer,
            {action: this.state.nuevaTarea,done:false}],
            nuevaTarea:""

        });
      }
  }
render()
{
return(
<div>
  <h4 className = "bg-primary text-white text-center p-2">
   Lista de que-haceres ({this.state.cosasPorhacer.filter(t=>!t.done).length}) cosas faltantes</h4>
   <div className="container-Huid"></div>
    <div className="my-1"></div>
    <input className="form-control"
    //Jala esta frase
    value={this.state.nuevaTarea}
    onChange={this.actualizarListaQuehaceres}></input>
    <button className= "btn btn-primary mt-1" onClick={this.crearNuevatarea}> Agregar</button>
</div>

)

};

}


