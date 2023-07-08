import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import {Post} from './components/Post';
import './global.css';
import styles from './App.module.css';


const posts = [
  {
    id:1,
    author:{
      profile:{
        avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Cervantes_J%C3%A1uregui.jpg/250px-Cervantes_J%C3%A1uregui.jpg",
        nome: "Miguel de Cervantes",
        role: "Escritor de Dom Quixote"
      },
      content: [
        {id: 1, type: 'paragraph', content: "A inveja vê sempre tudo com lentes de aumento que transformam"},
        {id: 2,type: 'paragraph', content: "pequenas coisas em grandiosas, anões em gigantes, indícios em"},
        {id: 3,type: 'paragraph', content: "certezas"},
        {id: 4,type: 'link', content: 'escritorespanhol.com'}
      ],
      publishedAt: new Date('2023-07-06 20:00:00')
    }
  },
  {
    id:2,
    author:{
      profile:{
        avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/300px-Shakespeare.jpg",
        nome: "Willian Shakespeare",
        role: "Escritor de Romeu e Julieta"
      },
      content: [
        {id: 1,type: 'paragraph', content: "Duvida da luz dos astros,"},
        {id: 2,type: 'paragraph', content: "De que o sol tenha calor,"},
        {id: 3,type: 'paragraph', content: "Duvida até da verdade,"},
        {id: 4,type: 'paragraph', content: "Mas confia em meu amor."},
        {id: 5,type: 'link', content: 'escritoringles.com'}
      ],
      publishedAt: new Date('2023-07-05 13:00:00')
    }
  },
  {
    id:3,
    author:{
      profile:{
        avatarUrl: "https://static.preparaenem.com/2021/02/cego-luis-vaz-de-camoes.jpg",
        nome: "Camões",
        role: "Escritor de Os Lusiadas"
      },
      content: [
        {id: 1,type: 'paragraph', content: "Os bons vi sempre passar"},
        {id: 2,type: 'paragraph', content: "No mundo graves tormentos;"},
        {id: 3,type: 'paragraph', content: "E para mais me espantar"},
        {id: 4,type: 'paragraph', content: "Os maus vi sempre nadar"},
        {id: 5,type: 'paragraph', content: "Em mar de contentamentos."},
        {id: 6,type: 'link', content: 'escritorportugues.com'}
      ],
      publishedAt: new Date('2023-07-04 13:30:00')
    }
  }
];


function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(
            post=>{
              return (
              <Post 
              key = {post.id}
                  autor ={post.author}
                  content={post.author.content}
                  publishedAt={post.author.publishedAt}
                />)
            }
          )}
        </main>
      </div>
    </div>
  )
}

export default App
