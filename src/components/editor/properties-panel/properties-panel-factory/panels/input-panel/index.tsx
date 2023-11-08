import { FC, useEffect, useState } from 'react'
import { PanelProps } from '../..'
import { Constructs } from '@/types'
import CustomInput from '@/components/component-factory/inputs/input'
import CustomTextarea from '@/components/component-factory/inputs/textarea'
import ComponentIdProperties from '../component-id-properties'
import ConfigProperties from '../config-properties'

const InputPanel: FC<PanelProps> = ({ component, updateComponent }) => {
    const [placeholder, setPlaceholder] = useState<string | undefined>(
        component.placeholder,
    )
    const [value, setValue] = useState<string | undefined>(component.value)

    useEffect(() => {
        updateComponent({
            ...component,
            placeholder,
            value,
        })
    }, [placeholder, value])

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
                onChange={(e) => setPlaceholder(e.target.value)}
            />

            <ConfigProperties
                component={component}
                updateComponent={updateComponent}
            />

            {component.type === Constructs.TEXTAREA ? (
                <CustomTextarea
                    label="Input default value (optional)"
                    id="value"
                    placeholder="Define component value example"
                    defaultValue={component.value}
                    onChange={(e) => setValue(e.target.value)}
                />
            ) : (
                <CustomInput
                    type={component.type}
                    label="Input default value (optional)"
                    id="value"
                    placeholder="Define component value example"
                    defaultValue={component.value}
                    onChange={(e) => setValue(e.target.value)}
                />
            )}
        </>
    )
}

export default InputPanel
