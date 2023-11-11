import { FC } from 'react'
import { FormComponentTypes, Form, FormComponent } from '@/types'
import FormPreview from './form-preview'
import DropZone from './drop-zone'
import Placeholder from './placeholder'
import styles from './style.module.scss'

interface Props {
    data: Form
    updateFormData: (data: Form) => void
    selectedComponent: string | undefined
    selectComponent: (component: string | undefined) => void
    draggedComponent: FormComponentTypes | undefined
    resetDraggedComponent: () => void
}

const Editor: FC<Props> = ({
    data,
    updateFormData,
    selectedComponent,
    selectComponent,
    draggedComponent,
    resetDraggedComponent,
}) => {
    const addComponent = (newComponent: FormComponent) => {
        const updatedFormData = {
            ...data,
            components: [...data.components, newComponent],
        }
        updateFormData(updatedFormData)
    }

    return (
        <section className={styles.editor}>
            {data.components.length !== 0 && (
                <FormPreview
                    data={data}
                    updateFormData={updateFormData}
                    selectedComponent={selectedComponent}
                    selectComponent={selectComponent}
                    draggedComponent={draggedComponent}
                    resetDraggedComponent={resetDraggedComponent}
                />
            )}

            {draggedComponent && (
                <DropZone
                    addComponent={addComponent}
                    draggedComponent={draggedComponent}
                    resetDraggedComponent={resetDraggedComponent}
                    selectComponent={selectComponent}
                />
            )}

            {data.components.length === 0 && !draggedComponent && (
                <Placeholder />
            )}

            <button
                type="button"
                className={styles.submitBtn}
                onClick={() => selectComponent(undefined)}>
                {data.submit.label}
            </button>
        </section>
    )
}

export default Editor
