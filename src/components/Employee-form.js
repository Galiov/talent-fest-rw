import React, { Component } from "react";
import db from '../initializers/firebase';
import firebase from "firebase";


class EmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.db = firebase.firestore();
        this.state = {puesto: '', mentor:'', lugar:"", rol:"", version:"", comentarios:""  }
        this.subirFirebase = this.subirFirebase.bind(this);
    }
    
    valueToState = ({name, value, checked, type}) => {
        this.setState(()=>{
            return{ [name]: type == "checkbox" ? checked : value};
        });
    
    };
    subirFirebase(event){
        event.preventDefault();
        const data = this.state;
        this.db.collection('example').add({
            data        
         }).then(() => {
            console.log('Agregado');
         }).catch(()=>{
            console.log('error')
         })
         }
    
    render() {
        return (
        <div>
          {/* <pre>{ JSON.stringify(this.state, null, 2)}</pre> */}
          <form>
              <label htmlFor="puesto"> Puesto </label>
              <input name="puesto" type="text" placeholder="Ingresa tu puesto"
              onChange={event => this.valueToState(event.target)}/>
               
               <label htmlFor="mentor"> Mentor </label>
              <input name="mentor" type="text" placeholder="Ingresa tu mentor"
              onChange={event => this.valueToState(event.target)}/>
              <label>
                  Lugar donde quieres realizar tu curso:
                  <input type="checkbox" name="lugar" onChange={event => this.valueToState(event.target)}/>
              </label>
              <legend>Rol:</legend>
              <label>
                  Coach
                  <input type="radio"
                         name="rol"
                         value={'coach'}
                         onChange={event => this.valueToState(event.target)}/>
              </label>
              <label>
                  Tech Lead
                  <input type="radio"
                         name="rol"
                         value={'techLead'}
                         onChange={event => this.valueToState(event.target)}/>
              </label>
              <label>
                  Couchee
                  <input type="radio"
                         name="rol"
                         value={'couchee'}
                         onChange={event => this.valueToState(event.target)}/>
              </label>
              <label htmlFor="color">¿qué versión quieres?</label>
              <select name= "version" onChange={event => this.valueToState(event.target)}>
                  <option value={""}>- selecciona uno -</option>
                  <option value={'verUno'}>1</option>
                  <option value={'verDos'}>2</option>
                  <option value={'verTres'}>3</option>
              </select>
              <label htmlFor="comentarios"></label>
              <textarea name="comentarios" placeholder="Comentarios, notas" onChange={event => this.valueToState(event.target)}/>
              <button onClick={this.subirFirebase}>Subir formulario</button>
          </form>
        </div>
        );
    }
}
  export default EmployeeForm;