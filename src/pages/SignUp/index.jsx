import { useState } from 'react'
import { api } from '../../services/api'
import { Input } from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Form, Background } from './styles'
import { Button } from '../../components/Button'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'

export function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password) {
            alert('Preencha todos os campos!')
            return
        }

        api.post('/users', { name, email, password })
            .then(() => {
                alert('Usuário cadastrado com sucesso!')
                navigate(-1)
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert('Erro ao cadastrar usuário, tente novamente!')
                }
            });
    }

    return (
        <Container>
            <Background />

            <Form>
                <h1>Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links importantes.</p>
                <h2>Crie sua conta</h2>
                <Input
                    placeholder='Nome'
                    type='text'
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    placeholder='E-mail'
                    type='text'
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    placeholder='Senha'
                    type='password'
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title='Cadastrar' onClick={handleSignUp} />
                <Link to="/">
                    Voltar para o login
                </Link>

            </Form>
        </Container>

    );
}