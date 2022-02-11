import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
//import Forms from './sections/forms'

class Box extends Component {
  render(){
    return(
      <div style = {{border: '1px solid #000', margin: 5, padding:5}}>
        {this.props.children}
      </div>
    )
  }
}

class Article extends Component {
  render () {
    return (
      <sections>
        <h2>{this.props.title}</h2>
        <p><em>Escrito por {this.props.author}</em></p>
        <Box>{this.props.date}</Box>
        <article>
          {this.props.children}
        </article>
      </sections>
      );
  }
}
class App extends Component {
  render() {
    return(
      <div className="App">
        <h4>Childrem props</h4>
        <article
        author = ' tomas'
        date = {new Date().toLocaleDateString()}
        title = 'articulo sobre la props children'>
        
        <p> el contenido que envolvemos dentro del componente articulo sera enviado al componenete como this.props.childrem.</p>
        <strong>y mantiene las etiquetas de hayais aniadido dentro</strong>

        </article>
      </div>
    );
  }

}
export default App;
