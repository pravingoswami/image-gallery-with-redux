import React from 'react'
import { Container, Row, Col,Label ,Input, Button } from 'reactstrap';
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBView
  } from "mdbreact";
import { connect } from 'react-redux'
import { startEditImage } from '../../actions/imagesActions';

class ImageEdit extends React.Component{

    constructor(props){
        super()
        this.state = {
            name : props.name ? props.name : '',
            description : props.description ? props.description :''
        }
    }



    handleForm = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name : this.state.name,
            description : this.state.description
        }
        const redirect = () => this.props.history.push('/images-without-data')
        this.props.dispatch(startEditImage(this.props.match.params.image, formData, redirect))
        console.log(this.props.match.params.image, formData, redirect())

    }

    render(){
        return(
            <div>
                <br></br> {console.log('imagedta', this.props.image)}
                <h1 className="display-4" style = {{textAlign : "center"}} >Images Data</h1>
                <br></br>
                <Container>
      <Row>
        <Col md = "8" >
        <MDBView waves>
            {
                this.props.image && (
                    <img src={this.props.image.download_url} className="img-fluid" alt="" />

                )
            }
            </MDBView>  
        </Col>
        <Col md = "4" >
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" value = {this.state.name}  onChange = {this.handleForm} placeholder="Enter Image Name" />
        <br></br>
        <Label for="description">Description</Label>
        <Input type="text" name="description" id="description" value = {this.state.description}  onChange = {this.handleForm} placeholder="Enter Image description" />
        <br></br>
        <Button color="primary" onClick = {this.handleSubmit} >Submit</Button>{' '}
        </Col>
      </Row>

      </Container>>
            </div>
        )
    }
}

const mapStateToProps = (state, props ) => {
    return {
        image : state.images.find(image => image.id == props.match.params.image)
    }
}


export default connect(mapStateToProps)(ImageEdit)