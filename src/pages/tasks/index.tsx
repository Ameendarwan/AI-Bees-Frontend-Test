import { useState, useEffect } from 'react';
import { Grid } from "@mui/material";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ArrayObjectsProps } from '../../interfaces';
import Button from '../../components/Button';
import TasksList from './tasksList';
import DoneTasksList from './doneTasksList';
import AddTask from './addTask';
import ViewTask from './viewTask';
import "./Tasks.scss";

export default function Tasks() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const listState: ArrayObjectsProps[] = useSelector((state: RootState) => state.tasks.tasks_list);
  const doneListState: ArrayObjectsProps[] = useSelector((state: RootState) => state.tasks.done_tasks_list);
  const [tasksList, setTasksList] = useState<ArrayObjectsProps[]>([])
  const [editMode, setEditMode] = useState<boolean>(false)
  const [doneTaskMode, setDoneTaskMode] = useState<boolean>(false)
  const [editValues, setEditValues] = useState<any>()
  const [viewMode, setViewMode] = useState<boolean>(false)

  useEffect(() => {
    setTasksList([...listState]);
  }, [listState])

  const handleClearEdit = () => {
    setEditMode(false);
    setEditValues(null);
  }

  const handleViewDoneTasks = () => {
    setDoneTaskMode(true);
    setIsOpen(true);
  }

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div className='text-center mt-5'>
          {doneListState.length > 0 && <Button title="View Done Tasks" type="button" designType="btn" onClick={handleViewDoneTasks} />}
          <h5>Hello world</h5>
        </div>
        {!doneTaskMode && <AddTask
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          editMode={editMode}
          editValues={editValues}
          handleClearEdit={handleClearEdit}
        />}
        {doneTaskMode && <DoneTasksList
          isOpen={isOpen}
        />}
        {viewMode && <ViewTask isOpen={isOpen} setIsOpen={setIsOpen} editValues={editValues} />}
        {tasksList.length === 0 &&
          <div className='tasks__centered__btn'>
            <Button title="Create Your First Task" type="button" designType="btn" onClick={() => setIsOpen(true)} />
          </div>}
        {tasksList.length > 0 &&
          <TasksList
            data={tasksList}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setViewMode={setViewMode}
            setEditMode={setEditMode}
            setEditValues={setEditValues}
          />
        }
      </Grid>
    </Grid>
  )
}
