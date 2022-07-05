import { useState, useEffect } from 'react'
import { Grid } from "@mui/material"
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Input from '../../components/Input'
import TasksList from './tasksList'
import "./Tasks.scss"

export default function Tasks() {
  const [isOpen, setIsOpen] = useState(false)

  // useEffect(() => {
  // console.log("List", newList)
  // }, [is])

  const handleSubmit = () => {
    setIsOpen(false);
  }

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div className='text-center mt-5'>
          <h5>Hello world</h5>
        </div>
        <div>
          <Modal isOpen={isOpen}>
            <form onSubmit={handleSubmit}>
              <Input value="Ameen" placeholder='enter name' previewMode={false} type={'input'} />
              <div className='mt-3'>
                <Input value="Ameen" placeholder='enter name' previewMode={false} type={'description'} />
              </div>
              <Grid container textAlign="center" className='mt-3'>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}> <Button type="circle-empty" /> </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}> <Button type="circle-yellow" /></Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}> <Button type="circle-green" /></Grid>
              </Grid>
              <div className='text-center mt-5 mb-1'>
                <Button title="Add To Tasks" type="submit" />
              </div>
            </form>
          </Modal>
          <div className='tasks__centered__btn'>
            <Button title="Create Your First Task" type="btn" onClick={() => setIsOpen(true)} />
          </div>
        </div>
        <TasksList />
      </Grid>
    </Grid>

  )
}
