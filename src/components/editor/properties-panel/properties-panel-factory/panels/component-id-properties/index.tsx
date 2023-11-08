import CustomInput from '@/components/component-factory/inputs/input'
import { FC, useEffect, useState } from 'react'
import { PanelProps } from '../..'

const ComponentIdProperties: FC<PanelProps> = ({
    component,
    updateComponent,
}) => {
    const [label, setLabel] = useState<string | undefined>(component.label)

    useEffect(() => {
        updateComponent({
            ...component,
            label,
        })
    }, [label])

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
                onChange={(e) => setLabel(e.target.value)}
            />
        </>
    )
}

export default ComponentIdProperties
