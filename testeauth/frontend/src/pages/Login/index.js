import React, { Component } from 'react';
import axios from 'axios';

import { Title, Form, SubmitButton, Container } from './styled';

export default class Login extends Component {
    state = [
        {
            email: '',
            senha: '',
        },
    ];

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            email: this.state.email,
            senha: this.state.senha,
        };
        console.log(data);

        axios({
            method: 'post',
            url: 'http://localhost:3333/auth',
            data: {
                email: this.state.email,
                senha: this.state.senha
            },
        })
        .then(response => {
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                window.location.assign('/home');
            }
        })
        .catch(error => {
            window.alert("Login invalido");
            console.log(error);
        });


    };

    render() {
        return (
            <Container>
                <Title>Login</Title>
                <Form onSubmit={this.handleSubmit}>
                    <h2>Email</h2>
                    <input
                        type="text"
                        onChange={e => this.setState({ email: e.target.value })}
                        placeholder="Digite seu melhor email"
                    />
                    <h2>Senha</h2>
                    <input
                        type="password"
                        onChange={e => this.setState({ senha: e.target.value })}
                        placeholder="Digite sua senha"
                    />
                    <SubmitButton type="submit">Entrar</SubmitButton>
                </Form>
            </Container>
        );
    }
}
