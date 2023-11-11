import { FormComponentTypes, FormComponent } from '@/types'
import { FC } from 'react'
import CustomSelect from './inputs/select'
import CustomTextarea from './inputs/textarea'
import RadioGroup from './inputs/radio-group'
import CustomInput from './inputs/input'

interface Props {
    component: FormComponent
}

const ComponentFactory: FC<Props> = ({ component }) => {
    switch (component.type) {
        case FormComponentTypes.SELECT:
            return (
                <CustomSelect
                    options={component.options ?? []}
                    selectedOptions={component.selectedOptions ?? []}
                    id={component.id}
                    label={component.label}
                    placeholder={component.placeholder}
                    required={component.isRequired}
                    hidden={component.isHidden}
                    multiple={component.isMultiple}
                />
            )

        case FormComponentTypes.TEXTAREA:
            return <CustomTextarea {...component} disabled />

        case FormComponentTypes.RADIO:
            return (
                <RadioGroup
                    options={component.options ?? []}
                    selectedOptions={component.selectedOptions ?? []}
                    id={component.id}
                    label={component.label}
                    required={component.isRequired}
                    hidden={component.isHidden}
                    disabled
                />
            )

        case FormComponentTypes.TEXTNODE:
            return component.value ? (
                <p>{component.value}</p>
            ) : (
                <span>Text Zone</span>
            )
        default:
            return (
                <CustomInput
                    id={component.id}
                    type={component.type}
                    label={component.label}
                    placeholder={component.placeholder}
                    required={component.isRequired}
                    hidden={component.isHidden}
                    value={component.value}
                    disabled
                />
            )
    }
}

export default ComponentFactory
