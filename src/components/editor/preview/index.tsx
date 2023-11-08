import { FormComponent, Constructs, Section, Form } from '@/types'
import { FC } from 'react'
import FormSection from './form-section'
import styles from './style.module.scss'

interface Props {
    form: Form
    updateComponents: (component: FormComponent[]) => void
    draggedComponent: Constructs | undefined
    resetDraggedComponent: () => void
    selectedComponent: FormComponent | Section | undefined
    setSelectedComponent: (
        component: FormComponent | Section | undefined,
    ) => void
}

const Preview: FC<Props> = ({
    form,
    updateComponents,
    draggedComponent,
    resetDraggedComponent,
    selectedComponent,
    setSelectedComponent,
}) => {
    return (
        <section className={styles.preview}>
            <h2>Preview</h2>

            <FormSection
                components={form.data}
                updateComponents={updateComponents}
                draggedComponent={draggedComponent}
                selectedComponent={selectedComponent}
                selectComponent={setSelectedComponent}
                resetDraggedComponent={resetDraggedComponent}
            />

            <button
                type="button"
                className={styles.submitBtn}
                onClick={() => setSelectedComponent(undefined)}>
                {form.submit.label}
            </button>
        </section>
    )
}

export default Preview
