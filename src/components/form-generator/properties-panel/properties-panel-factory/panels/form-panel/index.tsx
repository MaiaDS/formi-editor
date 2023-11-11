import CustomInput from '@/components/component-factory/inputs/input'
import { FC, useEffect, useState } from 'react'
import { Form } from '@/types'

interface Props {
    form: Form
    updateForm: (formData: Form) => void
}

const FormProperties: FC<Props> = ({ form, updateForm }) => {
    const [label, setLabel] = useState<string>(form.submit.label)
    const [action, setAction] = useState<string | undefined>(form.submit.action)

    useEffect(() => {
        updateForm({ ...form, submit: { label, action } })
    }, [label, action])

    return (
        <>
            <CustomInput
                type="text"
                label="Id"
                id="id"
                readOnly
                disabled
                value={form.id}
            />
            <CustomInput
                type="text"
                label="Submit button label*"
                id="label"
                placeholder="Define form submit button label"
                defaultValue={form.submit.label}
                onChange={(e) => setLabel(e.target.value)}
            />
            <CustomInput
                type="text"
                label="Form action*"
                id="action"
                placeholder="Define form action"
                defaultValue={form.submit.action}
                onChange={(e) => setAction(e.target.value)}
            />
        </>
    )
}

export default FormProperties
