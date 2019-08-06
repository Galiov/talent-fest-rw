import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class Confirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    
      render() {
        return (
          <div>
            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle} charCode="Y">Detalles</ModalHeader>
              <ModalBody>
                <p>Anel (coachee) pide Certificaión en Pega versión 2, llevada a cabo en ITESO la fecha del 20 de Noviembre de 2019.</p>
              <p>Mentor: Hector Ramos.</p>
              <p>Comentarios: Ninguno</p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.toggle}>Volver</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Confirmar</Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      }
    }
export default Confirm;