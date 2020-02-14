import React from 'react'
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBView
  } from "mdbreact";

  import "@fortawesome/fontawesome-free/css/all.min.css";
  import "bootstrap-css-only/css/bootstrap.min.css";
  import "mdbreact/dist/css/mdb.css";


class ImagesShow extends React.Component{
    render(){
        return(
            <div>

    
    <MDBContainer>
            <MDBRow>
                {
                    this.props.images.map(image => {
                        return (
                            <MDBCol lg="4"  >
                            <MDBView waves>
                              <img src={image.download_url} className="img-fluid" alt="" />
                            </MDBView>
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
}

export default ImagesShow