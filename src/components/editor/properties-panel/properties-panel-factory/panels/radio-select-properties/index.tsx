import CustomInput from '@/components/component-factory/inputs/input'
import { Constructs } from '@/types'
import { FC, useEffect, useState } from 'react'
import CustomSelect from '@/components/component-factory/inputs/select'
import { PanelProps } from '../..'
import ComponentIdProperties from '../component-id-properties'
import ConfigProperties from '../config-properties'
import OptionsList from './options'
import CreateOptionForm from './options/create-options'

const RadioSelectPanel: FC<PanelProps> = ({ component, updateComponent }) => {
    const [placeholder, setPlaceholder] = useState<string | undefined>(
        component.placeholder,
    )

    const [isMultiple, setIsMultiple] = useState<boolean>(
        component.isMultiple ?? false,
    )
    const [options, setOptions] = useState<string[]>(component.options ?? [])
    const [selectedOptions, setSelectedOptions] = useState<string[]>(
        component.selectedOptions ?? [],
    )

    useEffect(() => {
        updateComponent({
            ...component,
            placeholder,
            isMultiple,
            options,
            selectedOptions,
        })
    }, [placeholder, isMultiple, options, selectedOptions])

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

            {component.type === Constructs.SELECT && (
                <CustomInput
                    type="checkbox"
                    label="Multiple"
                    id="multiple"
                    defaultChecked={component.isMultiple}
                    onChange={(e) => setIsMultiple(e.target.checked)}
                />
            )}

            <OptionsList options={options} setOptions={setOptions} />
            <CreateOptionForm options={options} setOptions={setOptions} />
            <CustomSelect
                id="selectedOption"
                label="Selected option"
                placeholder="Choose option to select by default"
                options={['none', ...options]}
                selectedOptions={selectedOptions}
                multiple={component.isMultiple}
                onChange={(e) =>
                    setSelectedOptions([...selectedOptions, e.target.value])
                }
            />
        </>
    )
}

export default RadioSelectPanel
