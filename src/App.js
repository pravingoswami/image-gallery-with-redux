import React from 'react';
import NavbarDesign from './components/Navbar'
import { BrowserRouter, Route, Link } from "react-router-dom"
import ImagesWithData from './components/images-with-data/ImagesWithData';
import ImagesWitouthData from './components/images-without-data/ImagesWithoutData';
import ModalDesign from './components/temp/ModalDesign';
import ImageEdit from './components/images-without-data/ImageEdit';


class App extends React.Component{
  render(){
    return(
      <div>
        <BrowserRouter>

          <NavbarDesign />


          <Route path = "/images-without-data" component = {ImagesWitouthData} exact = {true} />
          <Route path = "/images-without-data/:image" component = {ImageEdit} />
          <Route path = "/images-with-data" component = {ImagesWithData} />
          {/* <Route path = "/modal" component = {ModalDesign} /> */}
        
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
