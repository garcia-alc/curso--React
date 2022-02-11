import React, {Component} from 'react'

export default class Forms extends Component {
    constructor (){
        super();
        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputTerms: true
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    hanleChange = (e) => {
        console.log ('hanleChange')
        console.log(e.target.checked)
        this.setState({inbputTerms: e.target.value})
    }

    render (){
        return(
            <div>
                <h4>Formularios</h4>
                <form onSubmit = {this.handleSubmit}>
                    <p>
                        <label htmlFor = 'name'>Nombre: </label>
                        <input
                        id = 'name'
                        name = 'userName'
                        onChange = {e => this.setState ({inputName: e.target.value})}
                        placeholder = ' introduce el nombre'
                        ref = {inputElement => this.inputName = inputElement} />
                        value = {this.state.inputName}
                    </p>

                    <p>
                        <label thlmFor = 'twitter'>Twitter:</label>
                        <input
                        idid = ' twitter'
                        name = ' twitterAccount'
                        onChange = {e => this.setState ({inputTwitter: e.target.value})}
                        placeholder = ' introduce tu Twitter' />
                        value = {this.state.inputTwitter}
                    </p>

                    <p>
                        <label>
                            <input 
                            checked = {this.state.inputTerms}
                            onChange = {this.hanleChange} 
                            type = 'checkbox' />
                            Accepted terms
                        </label>
                    </p>

                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}