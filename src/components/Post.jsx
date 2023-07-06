import styles from './Post.module.css'

export function Post() {

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXyOzKHsoAHGZVjCBBevzs3xCDSSZ3pmJVN1-TyCoZXJITgbDYIlIun9WfMJAOsPFDp0o&usqp=CAU"
                    />
                    <div className={styles.authorInfo} >
                        <strong>João da Silva</strong>
                        <span> Designer </span>

                    </div>
                </div>
                <time title='05 de julho às 16:30h' dateTime="2023-07-05 16:30:01"> Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>
                    Sint non in magna veniam culpa quis anim labore anim. Do laborum pariatur nostrud pariatur nisi labore sint elit aliqua tempor. Voluptate mollit aliquip duis do ut Lorem culpa cillum.
                </p>
                <p> <a href='#'> @loremIpsum </a> </p>
                <p> <a href='#'> #Lorem </a> {' '} <a href='#'>#EhNois </a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>
                <textarea
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

        </article>
    )
}