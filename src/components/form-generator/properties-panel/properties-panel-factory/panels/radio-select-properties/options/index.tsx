import { FC } from 'react'

interface Props {
    options: string[]
    setOptions: (options: string[]) => void
}

const OptionsList: FC<Props> = ({ options, setOptions }) => {
    const removeOption = (option: number) => {
        const updatedOptions = [...options]
        updatedOptions.splice(option, 1)
        setOptions(updatedOptions)
    }
    return (
        !!options.length && (
            <ul>
                {options.map((option, index) => (
                    <li key={`${option}-${index}`}>
                        {option}
                        <button
                            type="button"
                            onClick={() => removeOption(index)}>
                            x
                        </button>
                    </li>
                ))}
            </ul>
        )
    )
}

export default OptionsList
