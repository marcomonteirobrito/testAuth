import React, { Component } from 'react';

import { Message } from './styled';

export default class Home extends Component {
    state = {
        login: false,
        email: undefined,

    }

    componentDidMount() {
        const token = localStorage.getItem('token')

        if (token !== undefined && token !== null) {
            this.setState({ login: true, token: token })
        }
    }

    handleLogoff = e => {
        localStorage.removeItem('token')
        window.location.assign('/');

    }

    render() {
        return (
            <>
                {this.state.login === true
                    ?
                    <Message>
                        <h1>Seja bem vindo!</h1>
                        <button onClick={this.handleLogoff}>Logoff</button>
                    </Message>
                    :
                    <Message>
                        <h1>Efetue o login para acessar a Home</h1>
                        <button onClick={() => window.location.assign('/')}>Login</button>
                    </Message>

                }
            </>
        );
    }
}
