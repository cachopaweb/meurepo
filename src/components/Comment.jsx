import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';
export function Comment({myKey,content='', onDeleteComment}) {
    const[likeCount, setLikeCount] = useState(0);

    function handleLikeComment()
    {
        setLikeCount(likeCount+1);
    }

    function handleDeleteComment()
    {
        
        onDeleteComment(myKey);
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://arquidiocesedeuberaba.org.br/wp-content/uploads/2021/10/Padre-Pedro-Trindade.jpg"
            hasBorder={false}
            
            />
            <div className={styles.commentBox} >
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>João Pedro</strong>
                            <time title='05 de julho às 16:30h' dateTime="2023-07-05 16:30:01"> Cerca de 2h</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp/>
                    Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
            </div>
        </div>
    )
}