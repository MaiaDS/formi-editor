import { FormComponentTypes } from '@/types'
import { FC } from 'react'
import styles from './style.module.scss'

interface Props {
    setDraggedComponent: (construct: FormComponentTypes | undefined) => void
}

const FormComponentPanel: FC<Props> = ({ setDraggedComponent }) => {
    const types = (
        Object.keys(FormComponentTypes) as (keyof typeof FormComponentTypes)[]
    ).map((key) => FormComponentTypes[key])

    const handleDragStart = (construct: FormComponentTypes) => {
        setDraggedComponent(construct)
    }

    return (
        <section className={styles.types}>
            <h2>Form Component</h2>
            <ul>
                {types.map((construct) => (
                    <li
                        key={construct}
                        draggable
                        onDragStart={() => handleDragStart(construct)}
                        onDragEnd={() => setDraggedComponent(undefined)}>
                        {construct}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default FormComponentPanel
