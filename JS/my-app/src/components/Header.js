import React from "react"


class Header extends React.Component{//класс компонента
    render(){
      return(
        <header className = "header" >{this.props.curic}</header>
      )  
    }
}
export default Header