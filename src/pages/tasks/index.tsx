import React from 'react'
import { Row, Col } from "antd"
import Button from '../../components/Button'
import Modal from '../../components/Modal'

export default function Tasks() {
  return (
    <Row>
      <Col>
    <div className='text-center'>
      <Button title="Create Your First Task" />
      <Modal isOpen={true}>
        <h1>HELLO G</h1>
      </Modal>
    </div>
    </Col>
    </Row>

  )
}
