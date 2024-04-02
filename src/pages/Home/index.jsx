import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { FiPlus } from 'react-icons/fi'
export function Home(){
    return(
        <Container>
            <Brand>
            <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li> <ButtonText title={'Todos'} isActive/></li>
                <li> <ButtonText title={'React'}/></li>
                <li><ButtonText title={'Node'}/></li>
            </Menu>

            <Search>

            </Search>

            <Content>

            </Content>
           
            <NewNote>
            <FiPlus/>
                Criar Nota
            </NewNote>
        </Container>
    );
}