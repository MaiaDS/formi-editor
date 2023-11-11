import { FormComponent, FormComponentTypes, Section } from '@/types'
import { FC } from 'react'
import styles from './style.module.scss'
import { v4 as uuidv4 } from 'uuid'

interface Props {
    addComponent: (component: FormComponent | Section) => void
    draggedComponent: FormComponentTypes | undefined
    resetDraggedComponent: () => void
    selectComponent: (component: string) => void
}

const DropZone: FC<Props> = ({
    addComponent,
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
            if (draggedComponent === FormComponentTypes.SECTION) {
                newComponent = {
                    id: uuidv4(),
                    type: draggedComponent,
                    columns: [
                        {
                            id: uuidv4(),
                            components: [],
                        },
                        {
                            id: uuidv4(),
                            components: [],
                        },
                    ],
                }
            } else {
                selectComponent(newComponent.id)
            }
            addComponent(newComponent)
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
