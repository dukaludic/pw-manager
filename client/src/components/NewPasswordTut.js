import React, {Component} from 'react';
import axios from 'axios';

class NewPasswordTut extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: '',
             username: '',
             password: '',
             isOpen: false,
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault();
        delete this.state.isOpen;
        console.log(this.state)
        

        axios.post('/api/passwords', this.state)
        .then(() => {
            this.props.loadPasswords();
        })
        .then(() => {
            console.log(this.state)
        })
        .catch(error => {
            console.log(error)
        })

        this.setState({title: ''})
        this.setState({username: ''})
        this.setState({password: ''})

        this.clickHandler();
    }

    clickHandler = () => {
        this.state.isOpen === false ? this.setState({isOpen: true}) : this.setState({isOpen: false})
    }

    
    render() {
        const {title, username, password} = this.state;
        return (
            <div>
                {!this.state.isOpen && <button onClick={this.clickHandler} className="addBtn">Add</button>}
                {this.state.isOpen && <form className="addForm" onSubmit={this.submitHandler}>
                
                    <input className="input" type='text' name="title" placeholder="Title" value={title} onChange={this.changeHandler}/>
                
                    <input className="input" type='text' name="username" placeholder="Username" value={username} onChange={this.changeHandler}/>
                
                    <input className="input" type='text' name="password" placeholder="Password" value={password} onChange={this.changeHandler}/>
                <div className="actions">   
                <button className="addBtn" type="submit">Submit</button>
                <button onClick={this.clickHandler} className="addBtn">Cancel</button>
                </div>
                </form>}
            </div>
        )
    }
}

export default NewPasswordTut;