import React, {Component} from 'react';
import axios from 'axios';

class NewPasswordTut extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: '',
             username: '',
             password: '',
        }

    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    loadPw = () => {
        fetch('/api/passwords')
        .then(res => res.json())
        .then(passwords => this.setState({passwords}, () => console.log('Passwords fetched...', passwords)))
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state)
        
        axios.post('/api/passwords', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })

        this.loadPw()
    }
    
    render() {
        const {title, username, password} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                    <input type='text' name="title" value={title} onChange={this.changeHandler}/>
                    </div>
                    <div>
                    <input type='text' name="username" value={username} onChange={this.changeHandler}/>
                    </div>
                    <div>
                    <input type='text' name="password" value={password} onChange={this.changeHandler}/>
                    </div>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default NewPasswordTut;