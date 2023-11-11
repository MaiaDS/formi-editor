import { FC } from 'react'
import { Column, FormComponentTypes, FormComponent } from '@/types'
import DropZone from '../../../drop-zone'
import Placeholder from '../../../placeholder'
import EditorComponent from '../../form-component'

interface Props {
    sectionId: string
    data: Column
    updateColumn: (column: Column) => void
    selectedComponent: string | undefined
    selectComponent: (component: string) => void
    draggedComponent: FormComponentTypes | undefined
    resetDraggedComponent: () => void
}

const SectionColumn: FC<Props> = ({
    sectionId,
    data,
    updateColumn,
    selectedComponent,
    selectComponent,
    draggedComponent,
    resetDraggedComponent,
}) => {
    const addComponent = (newComponent: FormComponent) => {
        const updatedColumn = {
            ...data,
            components: [...data.components, newComponent],
        }
        updateColumn(updatedColumn)
    }

    const removeComponent = (componentId: string) => {
        const componentIndex = data.components.findIndex(
            (component) => component.id === componentId,
        )
        const updatedData = [...data.components]
        updatedData.splice(componentIndex, 1)
        updateColumn({
            ...data,
            components: updatedData,
        })
    }

    const handleSelect = (componentId: string) => {
        console.log('column ' + data.id + ' ' + componentId)
        const updateSelectedComponent =
            sectionId + '#' + data.id + '#' + componentId
        selectComponent(updateSelectedComponent)
    }

    return (
        <div>
            {data.components.length !== 0 && (
                <ul>
                    {data.components.map((component: FormComponent) => (
                        <EditorComponent
                            key={component.id}
                            data={component}
                            selectedComponent={selectedComponent}
                            selectComponent={handleSelect}
                            removeComponent={removeComponent}
                        />
                    ))}
                </ul>
            )}

            {draggedComponent && (
                <DropZone
                    addComponent={addComponent}
                    draggedComponent={draggedComponent}
                    resetDraggedComponent={resetDraggedComponent}
                    selectComponent={handleSelect}
                />
            )}
            {data.components.length === 0 && !draggedComponent && (
                <Placeholder />
            )}
        </div>
    )
}

export default SectionColumn
