import React from "react"
import Header from "./components/Header";
import Image from "./components/Image";
import Anime from "./img/Anime.png";

class App extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            Text: "Text",
        }
    }

    render() {
        const Text = "Валерчик";
        return (
            <div className="name">
                <Header curic = "Завтра ехать в Могилев"/>
                <Header curic = " ехать в Могилев"/>
                <Header curic = " в Могилев"/>
                <h5>{this.state.Text}</h5>
                <input placeholder={this.state.Text}
                    onClick={this.inputClick}
                    onMouseEnter={this.mouseOver} />
                <p>{this.state.Text === "Валерчи" ? "Yes" : "No"}</p> 
                <Image image={Anime}/> через компоненты и муть
                <img src = {Anime} />  простой способ отображения изображения
               
            </div>
       
        );
     
    }   
    inputClick() { 
        this.setState({Text: "Changed"})
        console.log("Click")}

    mouseOver() { console.log("Mouse Over")}
}
export default App 