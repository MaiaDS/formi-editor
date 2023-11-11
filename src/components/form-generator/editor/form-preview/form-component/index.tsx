import { FC, useMemo } from 'react'
import { FormComponent } from '@/types'
import ComponentFactory from '@/components/component-factory'
import styles from './style.module.scss'

interface Props {
    data: FormComponent
    selectedComponent: string | undefined
    selectComponent: (component: string) => void
    removeComponent: (componentId: string) => void
}

const EditorComponent: FC<Props> = ({
    data,
    selectedComponent,
    selectComponent,
    removeComponent,
}) => {
    const isActive: boolean = useMemo(() => {
        if (selectedComponent) {
            return selectedComponent.includes(data.id)
        }
        return false
    }, [selectedComponent])

    return (
        <li className={`${styles.component} ${isActive ? styles.active : ''}`}>
            <button
                type="button"
                onClick={() => selectComponent(data.id)}
                key={data.id}>
                <ComponentFactory component={data} />
            </button>
            {selectedComponent?.includes(data.id) && (
                <button type="button" onClick={() => removeComponent(data.id)}>
                    Delete
                </button>
            )}
        </li>
    )
}

export default EditorComponent
