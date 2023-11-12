import { FC } from 'react'
import { FormComponentTypes, Form, FormComponent, Section } from '@/types'
import FormSection from './section'
import styles from './style.module.scss'
import EditorComponent from './form-component'

interface Props {
    data: Form
    updateFormData: (data: Form) => void
    selectedComponent: string | undefined
    selectComponent: (component: string) => void
    draggedComponent: FormComponentTypes | undefined
    resetDraggedComponent: () => void
}

const FormPreview: FC<Props> = ({
    data,
    updateFormData,
    selectedComponent,
    selectComponent,
    draggedComponent,
    resetDraggedComponent,
}) => {
    const removeComponent = (componentId: string) => {
        const componentIndex = data.components.findIndex(
            (component) => component.id === componentId,
        )
        const updatedForm = { ...data }
        updatedForm.components.splice(componentIndex, 1)
        updateFormData(updatedForm)
    }

    const updateSection = (updatedSection: Section) => {
        const sectionIndex = data.components.findIndex(
            (section) => section.id === updatedSection.id,
        )
        const updatedForm = { ...data }
        updatedForm.components[sectionIndex] = updatedSection
        updateFormData(updatedForm)
    }

    return (
        <ul className={styles.list}>
            {data.components.map((component: FormComponent | Section) => {
                if (component.type === FormComponentTypes.SECTION) {
                    return (
                        <FormSection
                            key={component.id}
                            data={component as Section}
                            updateSection={updateSection}
                            selectedComponent={selectedComponent}
                            selectComponent={selectComponent}
                            draggedComponent={draggedComponent}
                            resetDraggedComponent={resetDraggedComponent}
                        />
                    )
                } else {
                    return (
                        <EditorComponent
                            key={component.id}
                            data={component}
                            selectedComponent={selectedComponent}
                            selectComponent={selectComponent}
                            removeComponent={removeComponent}
                        />
                    )
                }
            })}
        </ul>
    )
}

export default FormPreview
