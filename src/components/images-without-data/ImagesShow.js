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




  const breakpointColumnsObj = {
    default: 3,
    900: 2,
    500: 1
  };

class ImagesShow extends React.Component{

    constructor(){
        super()
        this.state = {
        //     breakpointColumnsObj : {
        //         default: 4
        //         // 1100: 3,
        //         // 960 : 3,
        //         // 400 :2
        //     }
        }
    }

    render(){
        return(
            <div>
                <MDBContainer>
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                            {
                                   this.props.images && this.props.images.map(image => {
                                        return (

                                        <div>
                                            <MDBCol>
                                            <Link to = {`/images-without-data/${image.id}`} >
                                            <img src={image.download_url} className="img-fluid" alt="" />
                                            </Link>
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
}

export default ImagesShow