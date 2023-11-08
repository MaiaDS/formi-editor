import { FC, InputHTMLAttributes } from 'react'
import styles from '../style.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

const CustomInput: FC<Props> = ({ id, label, ...props }) => {
    return (
        <span className={`${styles.input} ${styles[props.type!]}`}>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} />
        </span>
    )
}

export default CustomInput
