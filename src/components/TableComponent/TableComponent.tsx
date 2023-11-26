import { FC } from 'react'
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  Typography
} from '@mui/material'
import styles from './TableComponent.module.css'

interface TableComponentProps {
  title: string
  header: any
  tableContent: any
}

const TableComponent: FC<TableComponentProps> = ({
  title,
  header,
  tableContent
}: any) => (
  <div className={styles.TableComponent}>
    <Typography variant="h1">{title}</Typography>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>{header}</TableHead>
        {tableContent}
      </Table>
    </TableContainer>
  </div>
)

export default TableComponent
