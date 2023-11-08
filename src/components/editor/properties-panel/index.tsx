import { Form, FormComponent } from '@/types'
import { FC } from 'react'
import styles from './style.module.scss'
import PropertiesPanelFactory from './properties-panel-factory'
import FormPanel from './form-panel'

interface Props {
    form: Form
    setForm: (form: Form) => void
    selectedComponent: FormComponent | undefined
    updateComponent: (component: FormComponent) => void
}

const PropertiesPanel: FC<Props> = ({
    form,
    setForm,
    selectedComponent,
    updateComponent,
}) => {
    return (
        <section className={styles.properties}>
            <h2>Properties</h2>
            {selectedComponent ? (
                <PropertiesPanelFactory
                    component={selectedComponent}
                    updateComponent={updateComponent}
                />
            ) : (
                <FormPanel form={form} updateForm={setForm} />
            )}
        </section>
    )
}

export default PropertiesPanel
