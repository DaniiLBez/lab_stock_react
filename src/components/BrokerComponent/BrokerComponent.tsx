import { FC, useContext } from 'react'
import { Button, TableBody, TableCell, TableRow } from '@mui/material'
import { Broker } from '../../interfaces.ts'
import { BrokerContent } from './BrokerContent/BrokerContent.tsx'
import { ModalContext } from '../ModalContext/ModalContext.tsx'
import { useBrokers } from '../../hooks/brokers.tsx'
import TableComponent from '../TableComponent/TableComponent.tsx'
import CreateBroker from './CreateBroker/CreateBroker.tsx'
import NavigationComponent from '../NavigationComponent/NavigationComponent.tsx'
import ModalComponent from '../Modal/Modal.tsx'
import { AddCircleOutline } from '@mui/icons-material'

interface BrokerComponentProps {}
interface BrokerTableContentProps {
  brokers: Broker[]
  onDelete: (id: number) => void
}

const BrokerTableHeader: FC<BrokerComponentProps> = () => {
  return (
    <TableRow>
      <TableCell>Имя</TableCell>
      <TableCell>Баланс</TableCell>
      <TableCell>Опции</TableCell>
    </TableRow>
  )
}

const BrokerTableContent: FC<BrokerTableContentProps> = ({
  brokers,
  onDelete
}: any) => {
  return (
    <TableBody>
      {brokers.map((broker: Broker) => (
        <BrokerContent onDelete={onDelete} broker={broker} key={broker.id} />
      ))}
    </TableBody>
  )
}

const BrokerComponent: FC<BrokerComponentProps> = () => {
  const { modal, open: openModal, close: closeModal } = useContext(ModalContext)
  const { brokers, addBroker, deleteBroker } = useBrokers()

  const createHandler = (broker: Broker) => {
    closeModal()
    addBroker(broker as never)
  }

  const deleteHandler = (id: number) => {
    deleteBroker(id)
  }

  return (
    <>
      <NavigationComponent />
      <ModalComponent
        children={<CreateBroker onCreate={createHandler} />}
        title={'Add new broker'}
        open={modal}
        onClose={closeModal}
        className={'modal'}
      />
      <TableComponent
        title={'Brokers'}
        header={<BrokerTableHeader></BrokerTableHeader>}
        tableContent={
          <BrokerTableContent
            brokers={brokers}
            onDelete={deleteHandler}
          ></BrokerTableContent>
        }
      />
      <Button className="btn" onClick={openModal}>
        <AddCircleOutline sx={{ fontSize: 32 }} />
      </Button>
    </>
  )
}

export default BrokerComponent
