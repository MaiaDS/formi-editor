import CustomInput from '@/components/component-factory/inputs/input'
import { FC, useEffect, useState } from 'react'
import { PanelProps } from '../..'
import CustomTextarea from '@/components/component-factory/inputs/textarea'

const TextNodePanel: FC<PanelProps> = ({ component, updateComponent }) => {
    const [value, setValue] = useState<string | undefined>(component.value)

    useEffect(() => {
        updateComponent({
            ...component,
            value,
        })
    }, [value])

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
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    )
}

export default TextNodePanel
