import CustomInput from '@/components/component-factory/inputs/input'
import { FC, useEffect, useState } from 'react'
import { Form } from '@/types'

interface Props {
    form: Form
    updateForm: (formData: Form) => void
}

const FormProperties: FC<Props> = ({ form, updateForm }) => {
    const updatedForm = { ...form }
    const updateLabel = (label: string) => {
        updatedForm.submit.label = label
        updateForm(updatedForm)
    }

    const updateAction = (action: string) => {
        updatedForm.submit.action = action
        updateForm(updatedForm)
    }

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
                onChange={(e) => updateLabel(e.target.value)}
            />
            <CustomInput
                type="text"
                label="Form action*"
                id="action"
                placeholder="Define form action"
                defaultValue={form.submit.action}
                onChange={(e) => updateAction(e.target.value)}
            />
        </>
    )
}

export default FormProperties
