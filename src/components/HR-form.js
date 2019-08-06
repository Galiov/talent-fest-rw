import React, { Component } from "react";
import Confirm from "./Confirm";
import db from "../initializers/firebase";
import firebase from "firebase";

class HrForm extends Component {
  constructor(props) {
    super(props);
    this.db = firebase.firestore();
    this.state = {
      couchee: "",
      mentor: "",
      place: "",
      certification: "",
      version: "",
      coments: "",
      userID: "",
      userName: ""
    };
    this.subirFirebase = this.subirFirebase.bind(this);
    this.getUser = this.getUser.bind(this);

    this.state = {
      data: ""
    };
  }

  valueToState = ({ name, value, checked, type }) => {
    this.setState(() => {
      return { [name]: type === "checkbox" ? checked : value };
    });
  };
  subirFirebase(event) {
    event.preventDefault();
    const data = this.state;
    console.log(data);
    this.db
      .collection("certApproved")
      .add({
        data
      })
      .then(() => {
        this.setState({
          data: data
        });

        {
          /* this.db.collection("peticiones").get().then((querySnapshot) => {
                         let reqArray = [];
                         querySnapshot.forEach((doc) => {
                             reqArray.push(doc.data().data);
                             console.log(doc.id, " => ", doc.data());
                             console.log(reqArray);
                         });
                         
                     });*/
        }
      })
      .catch(() => {
        console.log("error");
      });
  }
  getUser = () => {
    firebase.auth().onAuthStateChanged(
      function(user) {
        if (user) {
          // User is signed in.
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var name = user.displayName;
          console.log(user);
          this.setState({ userID: uid, userName: name });
          // ...
        } else {
          // User is signed out.
          // ...
        }
        // ...
      }.bind(this)
    );
  };
  componentDidMount() {
    this.getUser();
  }

  render() {
    return (
      <div>
        {/* <pre>{ JSON.stringify(this.state, null, 2)}</pre> */}
        <form>
          <label htmlFor="couchee">Nombre del empleado </label>
          <input
            name="couchee"
            type="text"
            placeholder="Ingresa el nombre"
            onChange={event => this.valueToState(event.target)}
          />

          <label htmlFor="mentor"> Mentor </label>
          <input
            name="mentor"
            type="text"
            placeholder="Ingresa el mentor"
            onChange={event => this.valueToState(event.target)}
          />

          <label htmlFor="cartificacion"> Certificación solicitada: </label>
          <input
            name="certification"
            type="text"
            placeholder="Ingresa el certificado"
            onChange={event => this.valueToState(event.target)}
          />

          <label htmlFor="version">Versión solicitada</label>
          <select
            name="version"
            onChange={event => this.valueToState(event.target)}
          >
            <option value={""}>- selecciona uno -</option>
            <option value={"verUno"}>1</option>
            <option value={"verDos"}>2</option>
            <option value={"verTres"}>3</option>
          </select>

          <label>
            Lugar donde se realizará el curso:
            <select
              name="place"
              onChange={event => this.valueToState(event.target)}
            >
              <option value="home">En casa</option>
              <option value="unisite">Unisite</option>
              <option value="executrain">Executrain</option>
              <option value="iteso">Iteso</option>
            </select>
          </label>

          <label htmlFor="coments"></label>
          <textarea
            name="coments"
            placeholder="Coments, notas"
            onChange={event => this.valueToState(event.target)}
          />
          <button onClick={this.subirFirebase}>Subir formulario</button>
        </form>
        <div>
          <p>
            {this.state.data.couchee} ({this.state.data.rol}) pide la
            certificación {this.state.data.certification} versión:{" "}
            {this.state.data.version}, llevada a cabo en {this.state.data.place}{" "}
            con la fecha del {this.state.data.date}.
          </p>
          <p>Mentor: {this.state.data.mentor}.</p>
          <p>Comentarios: {this.state.data.coments}</p>
        </div>
        <Confirm />
      </div>
    );
  }
}
export default HrForm;
