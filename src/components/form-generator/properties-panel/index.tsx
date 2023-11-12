import { Form, FormComponent, Section } from '@/types'
import { FC, useMemo } from 'react'
import styles from './style.module.scss'
import PropertiesPanelFactory from './properties-panel-factory'
import { v4 as uuidv4 } from 'uuid'

interface Props {
    form: Form
    setForm: (form: Form) => void
    selectedComponent: string | undefined
}

const PropertiesPanel: FC<Props> = ({ form, setForm, selectedComponent }) => {
    const component: FormComponent | undefined = useMemo(() => {
        if (selectedComponent) {
            const path = selectedComponent.split('#')
            const firstLevelIndex = form.components.findIndex(
                (component) => component.id === path[0],
            )
            if (path.length === 1) {
                return form.components[firstLevelIndex]
            } else {
                const section = form.components[firstLevelIndex] as Section
                const columnIndex = section.columns.findIndex(
                    (column) => column.id === path[1],
                )
                return section.columns[columnIndex].components.find(
                    (component) => component.id === path[2],
                )!
            }
        }
        return undefined
    }, [selectedComponent])

    const updateComponent = (component: FormComponent) => {
        if (selectedComponent) {
            const path = selectedComponent.split('#')
            const updatedForm = { ...form }
            const firstLevelIndex = form.components.findIndex(
                (component) => component.id === path[0],
            )
            if (path.length === 1) {
                updatedForm.components[firstLevelIndex] = component
            } else {
                const section = form.components[firstLevelIndex] as Section
                const columnIndex = section.columns.findIndex(
                    (column) => column.id === path[1],
                )
                const componentIndex = section.columns[
                    columnIndex
                ].components.findIndex((component) => component.id === path[2])
                section.columns[columnIndex].components[componentIndex] =
                    component
                updatedForm.components[firstLevelIndex] = section
            }
            setForm(updatedForm)
        }
    }

    return (
        <section className={styles.properties}>
            <h2>Properties</h2>
            {selectedComponent ? (
                <PropertiesPanelFactory
                    component={component}
                    updateComponent={updateComponent}
                />
            ) : (
                <PropertiesPanelFactory form={form} updateForm={setForm} />
            )}
        </section>
    )
}

export default PropertiesPanel
