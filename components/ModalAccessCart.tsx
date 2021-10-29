import styles from "../styles/ModalAccessCart.module.scss"

export interface IModalProps {
    show: boolean
    onClose: Function
}

export default function ModalAccessCart(props: IModalProps) {
    return (
        <>
            {props.show && <div className={styles.modal}>
                <div className={styles.modal__content}>
                    <p>Avez-vous plus de 18 ans ?</p>

                    <div className={styles.modal__content__actions} onClick={() => props.onClose()}>
                        <button>OUI</button>
                        <a href="#">NON</a>
                    </div>
                </div>
            </div>}
        </>
    )
}