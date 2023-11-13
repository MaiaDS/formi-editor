import CustomInput from '@/components/component-factory/inputs/input'
import { FC } from 'react'
import { PanelProps } from '../..'

const ConfigProperties: FC<PanelProps> = ({ component, updateComponent }) => {
    const updatedComponent = { ...component }
    const updateRequired = (isRequired: boolean) => {
        updatedComponent.isRequired = isRequired
        updateComponent(updatedComponent)
    }

    const updateReadOnly = (isReadOnly: boolean) => {
        updatedComponent.isReadOnly = isReadOnly
        updateComponent(updatedComponent)
    }

    const updateHidden = (isHidden: boolean) => {
        updatedComponent.isHidden = isHidden
        updateComponent(updatedComponent)
    }

    return (
        <>
            <CustomInput
                type="checkbox"
                label="Required"
                id="required"
                defaultChecked={component.isRequired}
                onChange={(e) => updateRequired(e.target.checked)}
            />

            <CustomInput
                type="checkbox"
                label="Read-only"
                id="readOnly"
                defaultChecked={component.isReadOnly}
                onChange={(e) => updateReadOnly(e.target.checked)}
            />

            <CustomInput
                type="checkbox"
                label="Hidden"
                id="hidden"
                defaultChecked={component.isHidden}
                onChange={(e) => updateHidden(e.target.checked)}
            />
        </>
    )
}

export default ConfigProperties
