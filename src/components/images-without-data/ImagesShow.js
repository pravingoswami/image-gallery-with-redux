import React from 'react'
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBView
  } from "mdbreact";
  import Masonry from 'react-masonry-css'

import './modal.css';


  import "@fortawesome/fontawesome-free/css/all.min.css";
  import "bootstrap-css-only/css/bootstrap.min.css";
  import "mdbreact/dist/css/mdb.css";
  import {Link} from 'react-router-dom'


class ImagesShow extends React.Component{


    
    render(){
        return(
            <div>

    



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
                              <Link to = {`/images-without-data/${image.id}`} >
                              <img src={image.download_url} className="img-fluid" alt="" />
                              </Link>
                             
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

export default ImagesShow