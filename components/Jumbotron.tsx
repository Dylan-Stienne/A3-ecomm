import styles from "../styles/Jumbotron.module.scss"
import Image from "next/image"
import iphone from "../public/logo.png"

export default function Jumbotron() {
    return (
        <div>
            <div className={styles.backgroundImage}>
                <Image src={iphone} alt='iphone' />
            </div>
            <div className={styles.promotionalMessage}>
                <h3>SHOP</h3>
                <h2>iPhone</h2>
                <p>An <strong>exclusive drop</strong> available.</p>
            </div>
        </div>
    )
}