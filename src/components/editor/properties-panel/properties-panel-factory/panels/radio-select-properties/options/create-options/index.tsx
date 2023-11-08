import CustomInput from '@/components/component-factory/inputs/input'
import { FC, MouseEvent, useState } from 'react'
import styles from './style.module.scss'

interface Props {
    options: string[]
    setOptions: (options: string[]) => void
}

const CreateOptionForm: FC<Props> = ({ options, setOptions }) => {
    const [option, setOption] = useState<string>()

    const addOption = (
        e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    ) => {
        e.preventDefault()
        if (option && option.length) {
            setOptions([...options, option])
        }
    }

    return (
        <form className={styles.form}>
            <CustomInput
                type="text"
                label="Option*"
                id="option"
                placeholder="Define option name"
                required
                onChange={(e) => setOption(e.target.value)}
            />
            <button type="submit" onClick={(e) => addOption(e)}>
                Add option
            </button>
        </form>
    )
}
export default CreateOptionForm
