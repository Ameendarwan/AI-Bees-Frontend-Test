import { useState, useEffect } from 'react'
import { Grid } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store';
import { ArrayObjectsProps } from '../../interfaces';
import Button from '../../components/Button'
import TasksList from './tasksList'
import AddTask from './addTask';
import "./Tasks.scss"

export default function Tasks() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const listState: ArrayObjectsProps[] = useSelector((state: RootState) => state.tasks.tasks_list);
  const [tasksList, setTasksList] = useState<ArrayObjectsProps[]>([])

  useEffect(() => {
    console.log("NewList", listState)
    setTasksList([...listState]);
  }, [listState])

  const handleSubmit = () => {
    setIsOpen(false);
  }

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div className='text-center mt-5'>
          <h5>Hello world</h5>
        </div>
        <AddTask
          isOpen={isOpen}
        />
        <div className='tasks__centered__btn'>
          <Button title="Create Your First Task" type="btn" onClick={() => setIsOpen(true)} />
        </div>
        {tasksList &&
          <TasksList data={tasksList} />
        }
      </Grid>
    </Grid>
  )
}
