import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react';

export function Sidebar()
{

    return (
        <aside  className={styles.sidebar}>
            <img className={styles.cover}
            src="https://plus.unsplash.com/premium_photo-1666211586051-8448a043a977?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" />
            <div className={styles.profile}>
                <Avatar src = "https://arquidiocesedeuberaba.org.br/wp-content/uploads/2021/10/Padre-Pedro-Trindade.jpg"/>
                <strong>
                    Peter Paul
                </strong>
                <span>
                    Priest
                </span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar o seu perfil
                </a>
            </footer>
        </aside>
    );
}