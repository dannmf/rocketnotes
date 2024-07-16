/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { useState, useEffect } from 'react'
import { api } from '../../services/api'

import { ButtonText } from '../../components/ButtonText'
import { FiPlus } from 'react-icons/fi'
export function Home() {
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])

    function handleTagSelected(tagName) {
        const tagAlreadySelected = tagsSelected.includes(tagName)

        if (tagAlreadySelected) {
            const tagsFiltered = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(tagsFiltered)
            return;
        }
        setTagsSelected(prevState => [...prevState, tagName]);
    }


    useEffect(() => {
        async function fetchTags() {
            const response = await api.get('/tags')
            setTags(response.data)
        }

        fetchTags()
    }, [])
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li> <ButtonText
                    title={'Todos'}
                    onClick={() => setTagsSelected("all")}
                    $isactive={ tagsSelected.length === 0 }
                /></li>

                {
                    tags && tags.map(tag => (
                        <li key={tag.id}>

                            <ButtonText
                                title={tag.name}
                                onClick={() => handleTagSelected(tag.name)}
                                $isactive={tagsSelected.includes(tag.name)}
                            />
                        </li>

                    ))
                }

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