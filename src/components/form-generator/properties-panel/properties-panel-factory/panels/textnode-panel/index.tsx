import CustomInput from '@/components/component-factory/inputs/input'
import { FC } from 'react'
import { PanelProps } from '../..'
import CustomTextarea from '@/components/component-factory/inputs/textarea'

const TextNodePanel: FC<PanelProps> = ({ component, updateComponent }) => {
    const updateValue = (value: string) => {
        const updatedComponent = { ...component }
        updatedComponent.value = value
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

            <CustomTextarea
                label="Text"
                id="value"
                placeholder="Text"
                defaultValue={component.value}
                onChange={(e) => updateValue(e.target.value)}
            />
        </>
    )
}

export default TextNodePanel
