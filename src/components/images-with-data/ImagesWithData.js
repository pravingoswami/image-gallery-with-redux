import React from 'react'
import ImagesShow from './ImagesShow'
import { connect } from 'react-redux'

function ImagesWithData(props) {
    return (
        <div>
             <br></br>
             <h1 className="display-4" style = {{textAlign : "center"}} >Images Without Data</h1>
             <br></br>
             <ImagesShow images = {props.images && props.images} />

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        images : state.images
    }
}

export default connect(mapStateToProps)(ImagesWithData)