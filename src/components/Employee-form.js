import React, { Component } from "react";
import db from '../initializers/firebase';
import firebase from "firebase";
import "./components-styles/Employee-form.css";
import Confirm from './Confirm';
import Request from './Request';
 

class EmployeeForm extends Component {
    constructor(props) {
        super(props);
        this.db = firebase.firestore();
        this.state = {date: '', mentor:'', place:"", rol:"", version:"", coments:"", userID:"", userName:"" }
        this.subirFirebase = this.subirFirebase.bind(this);
        this.getUser=this.getUser.bind(this);
        

        this.state = {
          data: ""
        }
    }
    
    valueToState = ({name, value, checked, type}) => {
        this.setState(()=>{
            return{ [name]: type === "checkbox" ? checked : value};
        });
    
    };
    subirFirebase(event){
        event.preventDefault();
        const data = this.state;
          console.log(data);
        this.db.collection('peticiones').add({
            data        
         }).then(() => {
          this.setState({
            data: data
          })
          
           {/* this.db.collection("peticiones").get().then((querySnapshot) => {
                           let reqArray = [];
                           querySnapshot.forEach((doc) => {
                               reqArray.push(doc.data().data);
                               console.log(doc.id, " => ", doc.data());
                               console.log(reqArray);
                           });
                           
                       });*/}
         }).catch(()=>{
            console.log('error')
         })
         }
         getUser =() =>{
             firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              var isAnonymous = user.isAnonymous;
              var uid = user.uid;
              var name = user.displayName;
              console.log(user)
              this.setState({userID:uid, userName:name})
              // ...
            } else {
              // User is signed out.
              // ...
            }
            // ...
          }.bind(this));
          
        }
        componentDidMount(){
            this.getUser();
        }
        
    
    render() {
        return (
        <div class="container col-md-12">
        <div className="row">
          {/* <pre>{ JSON.stringify(this.state, null, 2)}</pre> */}
          <form>
            <div className="col-md-6">
              <label htmlFor="date"> Fecha deseada: </label>
              <input name="date" type="text" placeholder="Ingresa la fecha"
              onChange={event => this.valueToState(event.target)}/>
               
               <label htmlFor="mentor"> </label>
              <input name="mentor" type="text" placeholder="Ingresa tu mentor"
              onChange={event => this.valueToState(event.target)}/>
              <label>
                  Lugar donde quieres realizar tu curso:
                  <select  name="place" onChange={event => this.valueToState(event.target)}>
                  <option value="home">En casa</option>
                  <option value="unisite">Unisite</option>
                  <option value="executrain">Executrain</option>
                  <option value="iteso">Iteso</option>
                  </select>
              </label>
              </div>
              <div className="col-md-6">
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
              <label htmlFor="version">¿qué versión quieres?</label>
              <select name= "version" onChange={event => this.valueToState(event.target)}>
                  <option value={""}>- selecciona uno -</option>
                  <option value={'verUno'}>1</option>
                  <option value={'verDos'}>2</option>
                  <option value={'verTres'}>3</option>
              </select>
              <label htmlFor="coments"></label>
              <textarea name="coments" placeholder="Coments, notas" onChange={event => this.valueToState(event.target)}/>
              <Confirm />
              </div>
          </form>
            <div>
            </div>  
              {/*<Request
              <button onClick={this.subirFirebase} >Subir formulario</button> 
                               userName={this.state.data.userName}
                               rol={this.state.data.rol}
                               version={this.state.data.version}
                               place={this.state.data.place}
                               date={this.state.data.date}
                               mentor={this.state.data.mentor}
                               coments={this.state.data.coments}
                            />*/}
            </div>
        </div>
        );
    }
}
export default EmployeeForm;

