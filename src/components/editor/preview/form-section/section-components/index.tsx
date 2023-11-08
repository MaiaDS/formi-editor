import { FC } from 'react'
import { Constructs, FormComponent, Section } from '@/types'

import styles from './style.module.scss'
import ComponentPreview from './component-preview'
import FormSection from '..'

interface Props {
    components: FormComponent[]
    updateComponents: (component: FormComponent[]) => void
    draggedComponent: Constructs | undefined
    resetDraggedComponent: () => void
    selectedComponent: FormComponent | Section | undefined
    selectComponent: (component: FormComponent | Section | undefined) => void
}

const SectionComponents: FC<Props> = ({
    components,
    updateComponents,
    draggedComponent,
    resetDraggedComponent,
    selectedComponent,
    selectComponent,
}) => {
    const removeComponent = (id: string) => {
        const componentIndex = components.findIndex(
            (component) => component.id === id,
        )
        const updatedComponents = [...components]
        updatedComponents.splice(componentIndex - 1, 1)
        updateComponents(updatedComponents)
        selectComponent(undefined)
    }

    return (
        <ul className={styles.container}>
            {components.map((component: FormComponent | Section) => {
                if (component.type === Constructs.SECTION) {
                    return (
                        <div className={styles.section}>
                            {(component as Section).data.map(
                                (section: FormComponent[]) => (
                                    <FormSection
                                        components={section}
                                        updateComponents={updateComponents}
                                        draggedComponent={draggedComponent}
                                        resetDraggedComponent={
                                            resetDraggedComponent
                                        }
                                        selectedComponent={selectedComponent}
                                        selectComponent={selectComponent}
                                    />
                                ),
                            )}
                        </div>
                    )
                } else {
                    return (
                        <ComponentPreview
                            key={component.id}
                            component={component}
                            isSelected={selectedComponent?.id === component.id}
                            selectComponent={selectComponent}
                            removeComponent={removeComponent}
                        />
                    )
                }
            })}
        </ul>
    )
}

export default SectionComponents
