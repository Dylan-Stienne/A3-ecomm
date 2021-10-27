import styles from "../styles/Footer.module.scss"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Next js app | by &nbsp;<a href="https://dylan-stienne.fr"> @dyan-stienne</a></p>
            <div className={styles.footer__left}>
                <a href="https://github.com/dylan-stienne">Dylan Stienne</a>
            </div>
        </footer>
    )
}