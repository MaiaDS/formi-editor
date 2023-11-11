import CustomInput from '@/components/component-factory/inputs/input'
import { FC, useEffect, useState } from 'react'
import { PanelProps } from '../..'

const ConfigProperties: FC<PanelProps> = ({ component, updateComponent }) => {
    const [isRequired, setIsRequired] = useState<boolean>(
        component.isRequired ?? false,
    )
    const [isReadOnly, setIsReadOnly] = useState<boolean>(
        component.isReadOnly ?? false,
    )
    const [isHidden, setIsHidden] = useState<boolean>(
        component.isHidden ?? false,
    )

    useEffect(() => {
        updateComponent({
            ...component,
            isRequired,
            isHidden,
            isReadOnly,
        })
    }, [isRequired, isHidden, isReadOnly])

    return (
        <>
            <CustomInput
                type="checkbox"
                label="Required"
                id="required"
                defaultChecked={component.isRequired}
                onChange={(e) => setIsRequired(e.target.checked)}
            />

            <CustomInput
                type="checkbox"
                label="Read-only"
                id="readOnly"
                defaultChecked={component.isReadOnly}
                onChange={(e) => setIsReadOnly(e.target.checked)}
            />

            <CustomInput
                type="checkbox"
                label="Hidden"
                id="hidden"
                defaultChecked={component.isHidden}
                onChange={(e) => setIsHidden(e.target.checked)}
            />
        </>
    )
}

export default ConfigProperties
