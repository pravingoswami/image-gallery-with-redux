import React from 'react'
import { connect } from 'react-redux'
import ImagesShow from './ImagesShow'

function ImagesWitouthData(props) {
    return (
        <div>{console.log('images are comming', props.images)}
        <br></br>
             <h1 className="display-4" style = {{textAlign : "center"}} >Images Without Data</h1>
             <br></br>
            <ImagesShow images = {props.images && props.images} />
        </div>
    )
}

const mapStatToProps = (state) => {
    return {
        images : state.images
    }
}

export default connect(mapStatToProps)(ImagesWitouthData)