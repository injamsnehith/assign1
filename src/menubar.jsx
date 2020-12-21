  
import React, { Component } from 'react';
import img1 from './images/image.jpg';


class menubar extends Component {
    render() {
        return (
            <div>
            <h1 className="menubar">MenuBar</h1>
            
            <div className="img">
            <img src={img1} alt=""/><br />
            <a href="/#page1"> <button className="btn btn-primary" style={{width:100 + '%'}}>Page1</button><hr /></a>            
            <a href="/#page2"> <button className="btn btn-primary" style={{width:100 + '%'}}>Page2</button><hr /></a>
            </div>
</div>  
               
          
        );
    }
}

export default menubar;