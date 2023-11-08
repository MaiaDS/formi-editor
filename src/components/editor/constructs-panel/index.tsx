import { Constructs } from '@/types'
import { FC } from 'react'
import styles from './style.module.scss'

interface Props {
    setDraggedComponent: (construct: Constructs | undefined) => void
}

const ConstructsPanel: FC<Props> = ({ setDraggedComponent }) => {
    const constructs = (
        Object.keys(Constructs) as (keyof typeof Constructs)[]
    ).map((key) => Constructs[key])

    const handleDragStart = (construct: Constructs) => {
        setDraggedComponent(construct)
    }

    return (
        <section className={styles.constructs}>
            <h2>Constructs</h2>

            {constructs.map((construct) => (
                <article
                    key={construct}
                    draggable
                    onDragStart={() => handleDragStart(construct)}
                    onDragEnd={() => setDraggedComponent(undefined)}>
                    {construct}
                </article>
            ))}
        </section>
    )
}

export default ConstructsPanel
