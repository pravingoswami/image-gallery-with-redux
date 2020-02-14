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
import { connect } from 'react-redux';
import Masonry from 'react-masonry-css'

import './modal.css';



class ModalDesign extends React.Component{
    render(){
        return(
            <div>

    
    {/* <MDBContainer>
      <br></br>
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
          </MDBContainer> */}



        <MDBContainer>
        <Masonry
            breakpointCols={3}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {
                    this.props.images.map(image => {
                        return (

                          <div>
                             <img src={image.download_url} className="img-fluid" alt="" />
                          </div>
                        )
                    })
                }
          </Masonry>
        </MDBContainer>
    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    images : state.images
  }
}

export default connect(mapStateToProps)(ModalDesign)