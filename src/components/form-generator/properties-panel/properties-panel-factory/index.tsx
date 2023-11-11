import { FormComponentTypes, FormComponent } from '@/types'
import { FC } from 'react'
import CheckboxPanel from './panels/checkbox-panel'
import InputPanel from './panels/input-panel'
import TextNodePanel from './panels/textnode-panel'
import RadioSelectPanel from './panels/radio-select-properties'

export interface PanelProps {
    component: FormComponent
    updateComponent: (updatedComponent: FormComponent) => void
}

const PropertiesPanelFactory: FC<PanelProps> = ({
    component,
    updateComponent,
}) => {
    switch (component.type) {
        case FormComponentTypes.CHECKBOX:
            return (
                <CheckboxPanel
                    component={component}
                    updateComponent={updateComponent}
                />
            )
        case FormComponentTypes.SELECT:
        case FormComponentTypes.RADIO:
            return (
                <RadioSelectPanel
                    component={component}
                    updateComponent={updateComponent}
                />
            )
        case FormComponentTypes.TEXTNODE:
            return (
                <TextNodePanel
                    component={component}
                    updateComponent={updateComponent}
                />
            )
        default:
            return (
                <InputPanel
                    component={component}
                    updateComponent={updateComponent}
                />
            )
    }
}

export default PropertiesPanelFactory
