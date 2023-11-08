import { FC, useMemo } from 'react'
import ComponentFactory from '@/components/component-factory'
import { FormComponent } from '@/types'
import styles from './style.module.scss'

interface Props {
    component: FormComponent
    isSelected: boolean
    selectComponent: (component: FormComponent) => void
    removeComponent: (id: string) => void
}

const ComponentPreview: FC<Props> = ({
    component,
    isSelected,
    selectComponent,
    removeComponent,
}) => {
    const style = useMemo(() => {
        return `${styles.component} ${isSelected ? styles.selected : ''}`
    }, [isSelected])
    return (
        <li className={style}>
            <button
                type="button"
                onClick={() => selectComponent(component)}
                key={component.id}>
                <ComponentFactory component={component} />
            </button>
            {isSelected && (
                <button
                    type="button"
                    onClick={() => removeComponent(component.id)}>
                    Delete
                </button>
            )}
        </li>
    )
}

export default ComponentPreview
