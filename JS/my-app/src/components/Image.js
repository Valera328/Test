import React from "react"



class Image extends React.Component{//класс компонента
    render(){
      return(
        <img src={this.props.image} alt="Изображение" />
      )  
    }
}
export default Image