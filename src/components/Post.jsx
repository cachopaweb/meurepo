import { useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'




export function Post({ autor, content, publishedAt }) {

    /* Variáveis */ 
    const [newId, setNewId] = useState(1);
    const [comments,setComments] = useState([
        {
            id: 0,
            coment:'Post muito Legal',

        }
    ]);
    const [newCommentText, setNewCommentText] = useState('');
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });
    const publishedDateRealiteToNow = formatDistanceToNow(publishedAt,
        {
            locale: ptBR,
            addSuffix: true,

        });

    const isNewCommentEmpty = newCommentText.length == 0;
    /** Funções */
    function deleteComment(idToDelete)
    {
        const commentsWithoutDeleteOne = comments.filter(comment=>
            {
                return (comment.id != idToDelete)
            })
        setComments(commentsWithoutDeleteOne);

    }

    function handleCreateNewComment() {
        /* Por padrão o HTML redireciona para outra página no Submit
        mas se não tiver essa página ele da erro, por isso é feito a função abaixo */
        event.preventDefault();
        setComments([...comments, {id: newId, coment:newCommentText}]); 
        setNewId(newId +1);
        setNewCommentText('');
        console.log(comments);

    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function handleCreateNewCommentChange()
    {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={autor.profile.avatarUrl}
                    />
                    <div className={styles.authorInfo} >
                        <strong>{autor.profile.nome}</strong>
                        <span> {autor.profile.role} </span>

                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRealiteToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return (
                            <p key={line.id}>
                                {line.content}
                            </p>
                        )
                    } else if (line.type == 'link') {
                        return (
                            <p key={line.id}> <a href='#'> {line.content} </a></p>
                        )
                    }
                }

                )}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>
                <textarea name='comment'
                    placeholder='Deixe um comentário'
                    onChange = {handleCreateNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit'
                    disabled={isNewCommentEmpty}
                    >Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(
                    comment => {
                        return (<Comment
                            key ={comment.id}
                            myKey={comment.id}
                            content={comment.coment}
                            onDeleteComment = {deleteComment}
                            />);
                    }
                )}
            </div>
        </article>
    )
}