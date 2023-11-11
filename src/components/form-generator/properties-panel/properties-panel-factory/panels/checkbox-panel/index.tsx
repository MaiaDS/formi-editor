import CustomInput from '@/components/component-factory/inputs/input'
import { FC, useEffect, useState } from 'react'
import { PanelProps } from '../..'
import ConfigProperties from '../config-properties'
import ComponentIdProperties from '../component-id-properties'

const CheckboxPanel: FC<PanelProps> = ({ component, updateComponent }) => {
    const [isChecked, setIsChecked] = useState<boolean>(
        component.isChecked ?? false,
    )

    useEffect(() => {
        updateComponent({
            ...component,
            isChecked,
        })
    }, [isChecked])

    return (
        <>
            <ComponentIdProperties
                component={component}
                updateComponent={updateComponent}
            />

            <ConfigProperties
                component={component}
                updateComponent={updateComponent}
            />

            <CustomInput
                type="checkbox"
                label="Checked"
                id="checked"
                defaultChecked={component.isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
            />
        </>
    )
}

export default CheckboxPanel
