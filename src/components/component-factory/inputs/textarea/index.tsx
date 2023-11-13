import { FC, TextareaHTMLAttributes } from 'react'
import styles from '../style.module.scss'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string
}

const CustomTextarea: FC<Props> = ({ id, label, ...props }) => {
    return (
        <span className={styles.input}>
            {label && <label htmlFor={id}>{label}</label>}
            <textarea id={id} {...props} />
        </span>
    )
}

export default CustomTextarea
