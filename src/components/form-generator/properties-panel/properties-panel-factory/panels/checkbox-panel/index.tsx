import CustomInput from '@/components/component-factory/inputs/input'
import { FC } from 'react'
import { PanelProps } from '../..'
import ConfigProperties from '../config-properties'
import ComponentIdProperties from '../component-id-properties'

const CheckboxPanel: FC<PanelProps> = ({ component, updateComponent }) => {
    const updateChecked = (isChecked: boolean) => {
        const updatedComponent = { ...component }
        updatedComponent.isChecked = isChecked
        updateComponent(updatedComponent)
    }

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
                onChange={(e) => updateChecked(e.target.checked)}
            />
        </>
    )
}

export default CheckboxPanel
