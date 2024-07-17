import { Container, Profile, Logout } from './styles'
import { RiShutDownLine } from 'react-icons/ri'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { api } from '../../services/api'



export function Header() {
    const { signOut, user } = useAuth();
    const navigate = useNavigate();
  
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    function handleSignOut() {
        navigate('/');	
        signOut();
    }
    return (
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} alt="Foto do Usuário" />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine onClick={handleSignOut} />
            </Logout>


        </Container>
    )
}