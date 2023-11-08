export enum Constructs {
    TEXT = 'text',
    EMAIL = 'email',
    URL = 'url',
    PHONE = 'tel',
    PASSWORD = 'password',
    FILE = 'file',
    DATE = 'date',
    DATETIME = 'datetime-local',
    TIME = 'time',
    NUMBER = 'number',
    SELECT = 'select',
    TEXTAREA = 'textarea',
    CHECKBOX = 'checkbox',
    RADIO = 'radio',
    SECTION = 'section',
    TEXTNODE = 'textnode',
}

export interface FormComponent {
    id: string
    type: Constructs
    label?: string
    placeholder?: string
    isRequired?: boolean
    isChecked?: boolean
    isReadOnly?: boolean
    isHidden?: boolean
    value?: string
    min?: number
    max?: number
    step?: number
    isMultiple?: boolean
    options?: string[]
    selectedOptions?: string[]
}

export interface Form {
    id: string
    submit: {
        label: string
        action?: string
    }
    data: FormComponent[]
}

export interface Section {
    id: string
    type: Constructs.SECTION
    data: FormComponent[][]
}
