import { Form, FormComponentTypes } from '@/types'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './style.module.scss'
import PropertiesPanel from './properties-panel'
import Editor from './editor'
import FormComponentPanel from './form-component-panel'

const Formi = () => {
    const [form, setForm] = useState<Form>({
        id: uuidv4(),
        submit: { label: 'Submit' },
        components: [],
    })
    const [draggedComponent, setDraggedComponent] =
        useState<FormComponentTypes>()
    const [selectedComponent, setSelectedComponent] = useState<
        string | undefined
    >()

    // const updateComponent = (updatedComponent: FormComponent) => {
    //     console.log(updatedComponent)
    //     // const componentIndex = form.components.findIndex(
    //     //     (component) => component.id === updatedComponent.id,
    //     // )
    //     // const updatedComponents = [...form.components]
    //     // updatedComponents[componentIndex] = updatedComponent
    //     // updateFormData(updatedComponents)
    // }

    return (
        <main className={styles.editor}>
            <FormComponentPanel setDraggedComponent={setDraggedComponent} />

            <section>
                <Editor
                    data={form}
                    updateFormData={setForm}
                    selectedComponent={selectedComponent}
                    selectComponent={setSelectedComponent}
                    draggedComponent={draggedComponent}
                    resetDraggedComponent={() => setDraggedComponent(undefined)}
                />

                <PropertiesPanel
                    form={form}
                    selectedComponent={selectedComponent}
                    setForm={setForm}
                />
            </section>
        </main>
    )
}

export default Formi
