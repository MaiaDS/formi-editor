import CustomInput from '@/components/component-factory/inputs/input'
import { FC } from 'react'
import { PanelProps } from '../..'

const ComponentIdProperties: FC<PanelProps> = ({
    component,
    updateComponent,
}) => {
    const updateLabel = (label: string) => {
        const updatedComponent = { ...component }
        updatedComponent.label = label
        updateComponent(updatedComponent)
    }

    return (
        <>
            <CustomInput
                type="text"
                label="Id"
                id="id"
                readOnly
                disabled
                value={component.id}
            />
            <CustomInput
                type="text"
                label="Type"
                id="type"
                readOnly
                disabled
                value={component.type}
            />
            <CustomInput
                type="text"
                label="Label*"
                id="label"
                placeholder="Define component Name"
                defaultValue={component.label}
                onChange={(e) => updateLabel(e.target.value)}
            />
        </>
    )
}

export default ComponentIdProperties
