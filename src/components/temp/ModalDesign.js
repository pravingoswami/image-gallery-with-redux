import React from 'react'
import { MDBContainer,MDBCol,MDBView, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow } from 'mdbreact';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ModalDesign extends React.Component{
  

constructor(){
  super()
  this.state = {
    modal : false
  }
}

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render(){
    return(
      <div>



      <MDBContainer>
        {/* BUTTON */}
        <MDBBtn color="info" onClick={this.toggle}>Click</MDBBtn>
        {/* MODAL */}
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}   size="fluid"  frame  position="top">
          <MDBModalHeader toggle={this.toggle}>Image Description</MDBModalHeader>
          <MDBModalBody>
          <MDBRow>
          <MDBCol >
          <MDBView waves>
                  <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg" className="img-fluid" alt="" />
                        </MDBView>
          </MDBCol>
          <MDBCol size="4">
          <form>
          <p className="h4 text-center mb-4">Enter Image Details</p>
                <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Enter Image Name" />
          <br />
          <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Enter Image Description" />
          <div className="text-center mt-4">
          <Button color="primary">Submit</Button>{' '}
          </div>
        </form>
          </MDBCol>
            </MDBRow>
          </MDBModalBody>
          
        </MDBModal>
      </MDBContainer>



      </div>
    )
  }

}

export default ModalDesign