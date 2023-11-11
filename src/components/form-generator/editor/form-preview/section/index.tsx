import { FC } from 'react'
import { Column, FormComponentTypes, Section } from '@/types'
import SectionColumn from './column'
import styles from './style.module.scss'

interface Props {
    data: Section
    updateSection: (data: Section) => void
    selectedComponent: string | undefined
    selectComponent: (component: string) => void
    draggedComponent: FormComponentTypes | undefined
    resetDraggedComponent: () => void
}

const FormSection: FC<Props> = ({
    data,
    updateSection,
    selectedComponent,
    selectComponent,
    draggedComponent,
    resetDraggedComponent,
}) => {
    const updateColumn = (column: Column) => {
        const columnIndex = data.columns.findIndex(
            (column) => column.id === column.id,
        )
        const updatedSection = data
        updatedSection.columns[columnIndex] = column
        updateSection(updatedSection)
    }

    const handleSelect = (id: string) => {
        const updateSelectedComponent = data.id + '#' + id
        selectComponent(updateSelectedComponent)
    }

    return (
        <div className={styles.section}>
            {data.columns.length !== 0 &&
                data.columns.map((column) => (
                    <SectionColumn
                        key={column.id}
                        data={column}
                        updateColumn={updateColumn}
                        selectedComponent={selectedComponent}
                        selectComponent={handleSelect}
                        draggedComponent={draggedComponent}
                        resetDraggedComponent={resetDraggedComponent}
                    />
                ))}
        </div>
    )
}

export default FormSection
