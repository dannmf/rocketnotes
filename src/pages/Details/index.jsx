import { Container, Links, Content } from './styles' 
import { Button } from '../../components/Button';
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export function Details(){
  return(
    <Container>
      <Header />

      <main>
        <Content>
      <ButtonText title= "Excluir nota" />

      <h1>Introdução ao React</h1>
      
      <p>Lorem ipsum dolor sit amet consectetur,
         adipisicing elit. Magni provident repudiandae repellendus et totam consequatur facere adipisci illum vel.
         Fugit praesentium quam laboriosam nisi ex sint eum eius non libero?
      </p>

      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
        </Links>
      </Section>

      <Section title= "Marcadores">
        <Tag title= "Node" />
        <Tag title= "Flutter" />
        <Tag title= "React" />
      </Section>

      <Button title= "Voltar" />
      </Content>
      </main>
    </Container>
  )
}