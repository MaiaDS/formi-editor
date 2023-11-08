import { Constructs, FormComponent, Section } from '@/types'
import DropZone from './drop-zone'
import SectionComponents from './section-components'
import { FC } from 'react'
import styles from './style.module.scss'

interface Props {
    components: FormComponent[]
    updateComponents: (component: FormComponent[]) => void
    draggedComponent: Constructs | undefined
    resetDraggedComponent: () => void
    selectedComponent: FormComponent | Section | undefined
    selectComponent: (component: FormComponent | Section | undefined) => void
}

const FormSection: FC<Props> = ({
    components,
    updateComponents,
    draggedComponent,
    resetDraggedComponent,
    selectedComponent,
    selectComponent,
}) => {
    return (
        <div>
            {components.length !== 0 && (
                <SectionComponents
                    components={components}
                    updateComponents={updateComponents}
                    draggedComponent={draggedComponent}
                    resetDraggedComponent={resetDraggedComponent}
                    selectedComponent={selectedComponent}
                    selectComponent={selectComponent}
                />
            )}

            {draggedComponent && (
                <DropZone
                    components={components}
                    updateComponents={updateComponents}
                    draggedComponent={draggedComponent}
                    resetDraggedComponent={resetDraggedComponent}
                    selectComponent={selectComponent}
                />
            )}
            {components.length === 0 && !draggedComponent && (
                <span className={styles.placeholder}>
                    Drag and Drop components here
                </span>
            )}
        </div>
    )
}

export default FormSection
