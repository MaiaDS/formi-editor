import CustomInput from '@/components/component-factory/inputs/input'
import { FormComponentTypes } from '@/types'
import { FC } from 'react'
import CustomSelect from '@/components/component-factory/inputs/select'
import { PanelProps } from '../..'
import ComponentIdProperties from '../component-id-properties'
import ConfigProperties from '../config-properties'
import OptionsList from './options'
import CreateOptionForm from './options/create-options'

const RadioSelectPanel: FC<PanelProps> = ({ component, updateComponent }) => {
    const updatedComponent = { ...component }
    const updatePlaceholder = (placeholder: string) => {
        updatedComponent.placeholder = placeholder
        updateComponent(updatedComponent)
    }

    const updateMultiple = (isMultiple: boolean) => {
        updatedComponent.isMultiple = isMultiple
        updateComponent(updatedComponent)
    }

    const updateOptions = (options: string[]) => {
        updatedComponent.options = options
        updateComponent(updatedComponent)
    }

    const updateSelectedOptions = (options: string[]) => {
        updatedComponent.selectedOptions = options
        updateComponent(updatedComponent)
    }

    const getOptions = (): string[] => {
        return updatedComponent.options ?? []
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

            {component.type === FormComponentTypes.SELECT && (
                <CustomInput
                    type="checkbox"
                    label="Multiple"
                    id="multiple"
                    defaultChecked={component.isMultiple}
                    onChange={(e) => updateMultiple(e.target.checked)}
                />
            )}

            <OptionsList options={getOptions()} setOptions={updateOptions} />
            <CreateOptionForm
                options={getOptions()}
                setOptions={updateOptions}
            />
            <CustomSelect
                id="selectedOption"
                label="Selected option"
                placeholder="Choose option to select by default"
                options={['none', ...getOptions()]}
                selectedOptions={updatedComponent.selectedOptions ?? []}
                multiple={component.isMultiple}
                onChange={(e) =>
                    updateSelectedOptions([
                        ...(updatedComponent.selectedOptions ?? []),
                        e.target.value,
                    ])
                }
            />
        </>
    )
}

export default RadioSelectPanel
