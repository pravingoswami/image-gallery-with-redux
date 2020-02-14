import React from 'react'


  import {MDBContainer, MDBRow, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
  import Masonry from 'react-masonry-css'

  import '../images-without-data/modal.css';

function ImagesShow(props){
    return(
        <div>


        {/* <MDBContainer>
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
            </MDBContainer> */}


            <MDBContainer>
        <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {
                    props.images && props.images.map(image => {
                        return (

                          <div>
                             <MDBCard style={{ width: "22rem" }} >
                                        <MDBCardImage className="img-fluid" src={image.download_url} waves />
                                        <MDBCardBody>
                                        <MDBCardTitle>{image.name ? image.name : 'title'}</MDBCardTitle>
                                        <MDBCardText>
                                            {image.description ? image.description : 'Description'}
                                        </MDBCardText>
                                        </MDBCardBody>
                                        </MDBCard>
                          </div>
                        )
                    })
                }
          </Masonry>
        </MDBContainer>

        </div>
    )
}




export default ImagesShow