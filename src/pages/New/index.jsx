/* eslint-disable react/jsx-key */
import { useState } from 'react'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { Container, Form } from './styles'


export function New() {
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState('');
    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');

    function handleAddTag() {
        if (!newTag) return alert('A tag não pode ser vazia!');
        setTags(prevState => [...prevState, newTag]);
        setNewTag('');
    }

    function handleAddLink() {
        if (!newLink) return alert('O link não pode ser vazio!');
        setLinks(prevState => [...prevState, newLink]);
        setNewLink('');
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted));
    }
    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to='/'>Voltar</Link>
                    </header>
                    <Input placeholder='Titulo'></Input>
                    <Textarea placeholder="Observações" />

                    <Section title="Links Úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={link}
                                    onClick={() => handleRemoveLink(link)}
                                />
                            ))
                        }
                        <NoteItem
                            isNew
                            placeholder='Novo Link'
                            value={newLink}
                            onChange={(e) => setNewLink(e.target.value)}
                            onClick={(handleAddLink)}
                        />
                    </Section>
                    <Section title='Marcadores'>
                        {
                            tags.map((tag, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={tag}
                                    onChange={(e) => setNewTag(e.target.value)}
                                    onClick={() => handleRemoveTag(tag)}
                                />
                            ))
                        }
                        <div className='tags'>
                            <NoteItem
                                placeholder="Nova Tag"
                                isNew
                                value={newTag}
                                onChange={(e) => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />
                        </div>

                    </Section>
                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )

} 