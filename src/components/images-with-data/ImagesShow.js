import React from 'react'


  import {MDBContainer, MDBRow, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
  import Masonry from 'react-masonry-css'

  import '../images-without-data/modal.css';

  const breakpointColumnsObj = {
    default: 3,
    900: 2,
    500: 1
  };


function ImagesShow(props){
    return(
        <div>
            <MDBContainer>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
            {
                    props.images && props.images.map(image => {
                        return (

                          <div>
                            <MDBCol>
                            <MDBCard style={{ width: "22rem" }} >
                                        <MDBCardImage className="img-fluid" src={image.download_url} waves />
                                        <MDBCardBody>
                                        <MDBCardTitle>{image.name ? image.name : 'title'}</MDBCardTitle>
                                        <MDBCardText>
                                            {image.description ? image.description : 'Description'}
                                        </MDBCardText>
                                        </MDBCardBody>
                                        </MDBCard>
                            </MDBCol>
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