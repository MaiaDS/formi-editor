import { FC, SelectHTMLAttributes } from 'react'
import styles from '../style.module.scss'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string
    options: string[]
    selectedOptions: string[]
}

const CustomSelect: FC<Props> = ({
    id,
    label,
    options,
    selectedOptions,
    ...props
}) => {
    return (
        <span className={styles.input}>
            {label && <label htmlFor={id}>{label}</label>}
            <select
                id={id}
                {...props}
                defaultValue={
                    props.multiple ? selectedOptions : selectedOptions[0]
                }>
                {options &&
                    options.map((option) => (
                        <option key={option}>{option}</option>
                    ))}
            </select>
        </span>
    )
}

export default CustomSelect
