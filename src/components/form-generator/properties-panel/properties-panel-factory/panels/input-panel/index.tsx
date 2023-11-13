import { FC } from 'react'
import { PanelProps } from '../..'
import { FormComponentTypes } from '@/types'
import CustomInput from '@/components/component-factory/inputs/input'
import CustomTextarea from '@/components/component-factory/inputs/textarea'
import ComponentIdProperties from '../component-id-properties'
import ConfigProperties from '../config-properties'

const InputPanel: FC<PanelProps> = ({ component, updateComponent }) => {
    const updatedComponent = { ...component }
    const updatePlaceholder = (placeholder: string) => {
        updatedComponent.placeholder = placeholder
        updateComponent(updatedComponent)
    }

    const updateValue = (value: string) => {
        updatedComponent.value = value
        updateComponent(updatedComponent)
    }

    return (
        <>
            <ComponentIdProperties
                component={component}
                updateComponent={updateComponent}
            />

            <CustomInput
                type="text"
                label="Placeholder*"
                id="placeholder"
                placeholder="Define component value example"
                defaultValue={component.placeholder}
                onChange={(e) => updatePlaceholder(e.target.value)}
            />

            <ConfigProperties
                component={component}
                updateComponent={updateComponent}
            />

            {component.type === FormComponentTypes.TEXTAREA ? (
                <CustomTextarea
                    label="Input default value (optional)"
                    id="value"
                    placeholder="Define component value example"
                    defaultValue={component.value}
                    onChange={(e) => updateValue(e.target.value)}
                />
            ) : (
                <CustomInput
                    type={component.type}
                    label="Input default value (optional)"
                    id="value"
                    placeholder="Define component value example"
                    defaultValue={component.value}
                    onChange={(e) => updateValue(e.target.value)}
                />
            )}
        </>
    )
}

export default InputPanel
