import React from 'react'
import {yes, no} from '../objects'

class ImageCard extends React.Component {

  constructor() {
    super()
    this.state = {
      image_url: no["no-image"],
      statement: no["no-statement"]
    }
  }

  switch = () => {
    if(this.state.image_url === no["no-image"]){
      this.setState({
        image_url: yes["yes-image"],
        statement: yes["yes-statement"]
      })
    } else {
      this.setState({
        image_url: no["no-image"],
        statement: no["no-statement"]
      })
    }
  }
  
  render(){
    return(
      <div className="cont">
        <h1 className="main-div">{this.state.statement}</h1>
        <div><img className="main-div" onClick={this.switch} src={this.state.image_url} /></div>
      </div>
    )
  }

}

export default ImageCard