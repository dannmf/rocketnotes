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
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'


export function New() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState('');

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');

    const navigate = useNavigate();

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

    async function handleNewNote() {
        if (newLink) return alert('Adicione o link antes de salvar a nota!');
        if (newTag) return alert('Adicione a tag antes de salvar a nota!');
        if (!title || !description) return alert('Preencha todos os campos!');

        await api.post('/notes', {
            title,
            description,
            links,
            tags,
        })

        alert('Nota criada com sucesso!');
        navigate('/');

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
                    <Input
                        placeholder='Titulo'
                        onChange={(e) => setTitle(e.target.value)}

                    ></Input>

                    <Textarea
                        placeholder="Observações"
                        onChange={(e) => setDescription(e.target.value)}
                    />

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
                    <Button
                        title="Salvar"
                        onClick={handleNewNote}
                    />
                </Form>
            </main>
        </Container>
    )

} 