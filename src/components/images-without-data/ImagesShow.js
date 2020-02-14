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
  import {Link} from 'react-router-dom'


class ImagesShow extends React.Component{


    
    render(){
        return(
            <div>

    
    <MDBContainer>
            <MDBRow>
                {
                    this.props.images.map(image => {
                        return (
                            <MDBCol lg="4">
                           
                              <Link to = {`/images-without-data/${image.id}`} key = {image.id} >
                              <MDBView waves>
                                  <img src={image.download_url} className="img-fluid" alt="" key = {image.id} />
                                  </MDBView>
                                  
                                  </Link>
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