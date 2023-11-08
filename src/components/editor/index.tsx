import { Form, Constructs, FormComponent } from '@/types'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './style.module.scss'
import ConstructsPanel from './constructs-panel'
import PropertiesPanel from './properties-panel'
import Preview from './preview'

const Formi = () => {
    const [form, setForm] = useState<Form>({
        id: uuidv4(),
        submit: { label: 'Submit' },
        data: [],
    })
    const [draggedComponent, setDraggedComponent] = useState<Constructs>()
    const [selectedComponent, setSelectedComponent] = useState<FormComponent>()

    const updateComponent = (updatedComponent: FormComponent) => {
        const componentIndex = form.data.findIndex(
            (component) => component.id === updatedComponent.id,
        )
        const updatedComponents = [...form.data]
        updatedComponents[componentIndex] = updatedComponent
        updateFormData(updatedComponents)
    }

    const updateFormData = (updatedData: FormComponent[]) => {
        setForm({ ...form, data: updatedData })
    }

    return (
        <main className={styles.editor}>
            <ConstructsPanel setDraggedComponent={setDraggedComponent} />

            <Preview
                form={form}
                updateComponents={updateFormData}
                draggedComponent={draggedComponent}
                resetDraggedComponent={() => setDraggedComponent(undefined)}
                selectedComponent={selectedComponent}
                setSelectedComponent={setSelectedComponent}
            />

            <PropertiesPanel
                form={form}
                selectedComponent={selectedComponent}
                updateComponent={updateComponent}
                setForm={setForm}
            />
        </main>
    )
}

export default Formi
