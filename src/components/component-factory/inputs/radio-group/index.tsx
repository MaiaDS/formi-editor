import { FC, InputHTMLAttributes } from 'react'
import CustomInput from '../input'
import styles from '../style.module.scss'
import { FormComponentTypes } from '@/types'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    options: string[]
    selectedOptions: string[]
}

const RadioGroup: FC<Props> = ({
    id,
    label,
    options,
    selectedOptions,
    ...props
}) => {
    return (
        <span className={styles.input}>
            {label && <label>{label}</label>}
            {options.length ? (
                <span className={styles.radioGroup}>
                    {options.map((option: string) => (
                        <CustomInput
                            key={`${id}-${option}`}
                            type={FormComponentTypes.RADIO}
                            label={option}
                            id={`${id}-${option}`}
                            checked={selectedOptions[0] === option}
                            disabled={props.disabled}
                        />
                    ))}
                </span>
            ) : (
                <span>No radio options added</span>
            )}
        </span>
    )
}

export default RadioGroup
