import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'


import { ButtonText } from '../../components/ButtonText'
import { FiPlus } from 'react-icons/fi'
export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li> <ButtonText title={'Todos'} isActive /></li>
                <li> <ButtonText title={'React'} /></li>
                <li><ButtonText title={'Node'} /></li>
            </Menu>

            <Search>
                <Input placeholder='Pesquisar pelo título' />
            </Search>

            <Content>
                <Section title={"Minhas Notas"}>
                    <Note
                        data={
                            {
                                title: 'React',
                                tags: [
                                    { id: 1, name: 'react' },
                                    { id: 2, name: 'js' }

                                ]
                            }

                        }
                    />
                </Section>

            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar Nota
            </NewNote>
        </Container>
    );
}