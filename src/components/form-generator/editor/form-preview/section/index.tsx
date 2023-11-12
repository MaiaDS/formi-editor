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
            (sectionColumn) => sectionColumn.id === column.id,
        )
        const updatedSection = { ...data }
        updatedSection.columns[columnIndex] = column
        updateSection(updatedSection)
    }

    return (
        <div className={styles.section}>
            {data.columns.length !== 0 &&
                data.columns.map((column) => (
                    <SectionColumn
                        key={column.id}
                        sectionId={data.id}
                        data={column}
                        updateColumn={updateColumn}
                        selectedComponent={selectedComponent}
                        selectComponent={selectComponent}
                        draggedComponent={draggedComponent}
                        resetDraggedComponent={resetDraggedComponent}
                    />
                ))}
        </div>
    )
}

export default FormSection
