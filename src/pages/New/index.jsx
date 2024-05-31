import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'





import { Container, Form } from './styles'


export function New() {
    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href='/'>Voltar</a>
                    </header>
                    <Input placeholder='Titulo'></Input>
                    <Textarea placeholder="Observações" />

                    <Section title="Links Úteis">
                        <NoteItem value="teste" />
                        <NoteItem isNew placeholder="Novo Link" />
                    </Section>
                    <Section title='Marcadores'>
                        <div className='tags'>
                            <NoteItem value="react" />
                            <NoteItem  placeholder="Nova Tag" isNew  />
                        </div>
                  
                    </Section>
                    <Button title="Salvar" />
                </Form>
            </main>
        </Container>
    )

} 