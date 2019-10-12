import React from "react";
import randomcolor from "randomcolor"
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from "./components/MainContent";
//41
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      color: ""
    };
    this.handleClick = this.handleClick.bind(this); //in handleClick de this kunt gebruiken moet je die binden

  }
  handleClick() {
    this.setState(prevState => {
      return { 
        count: prevState.count + 1,
        color: randomcolor()
      };
    });
  }
  /*
  componentDidUpdate(prevState){
    if(prevState.count !== this.state.count)
    {
      const newColor = randomcolor();
      this.setState({color: newColor});
    }
  }
*/
  render() { //condition ? statement if true : statement if false
    //let buttonText = this.state.isLogged ? "you klik" : "don't klik"; 
    return (
      <div className="App">
        <Header />
          <div className="di">
            <h2 style={{color: this.state.color}}>{this.state.count}</h2> {/*javascript dubbel {*/}
            <button onClick={this.handleClick}> klik me </button>
          </div>

          <MainContent />
          <Footer name="halima" />
      </div>
    );
  }
}

export default App;
