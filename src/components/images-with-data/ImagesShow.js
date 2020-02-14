import React from 'react'


  import {MDBContainer, MDBRow, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

function ImagesShow(props){
    return(
        <div>


        <MDBContainer>
                <MDBRow>
                    {
                        props.images.map(image => {
                            return (
                                <MDBCol lg="4">

                                        <MDBCard style={{ width: "22rem" }} >
                                        <MDBCardImage className="img-fluid" src={image.download_url} waves />
                                        <MDBCardBody>
                                        <MDBCardTitle>{image.name ? image.name : 'title'}</MDBCardTitle>
                                        <MDBCardText>
                                            {image.description ? image.description : 'Description'}
                                        </MDBCardText>
                                        </MDBCardBody>
                                        </MDBCard>
                                        <br></br>
                                </MDBCol>
                            )
                        })
                    }
                </MDBRow>
            </MDBContainer>

        </div>
    )
}




export default ImagesShow