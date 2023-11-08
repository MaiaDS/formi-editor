import { FormComponent, Constructs, Section } from '@/types'
import { FC } from 'react'
import styles from './style.module.scss'
import { v4 as uuidv4 } from 'uuid'

interface Props {
    components: FormComponent[]
    updateComponents: (component: FormComponent[]) => void
    draggedComponent: Constructs | undefined
    resetDraggedComponent: () => void
    selectComponent: (component: FormComponent | Section | undefined) => void
}

const DropZone: FC<Props> = ({
    components,
    updateComponents,
    draggedComponent,
    resetDraggedComponent,
    selectComponent,
}) => {
    const handleDrop = () => {
        if (draggedComponent) {
            let newComponent: FormComponent | Section = {
                id: uuidv4(),
                type: draggedComponent,
            }
            if (draggedComponent === Constructs.SECTION) {
                newComponent = {
                    id: uuidv4(),
                    type: draggedComponent,
                    data: [[], []],
                }
            }
            updateComponents([...components, newComponent])
            selectComponent(newComponent)
            resetDraggedComponent()
        }
    }
    return (
        <div
            className={styles.dropZone}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}>
            Drop component
        </div>
    )
}

export default DropZone
