import { Container, Profile, Logout } from './styles'
import { RiShutDownLine } from 'react-icons/ri'

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/dannmf.png" alt="Foto do Usuário" />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>Daniel Manoel</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>


        </Container>
    )
}