import { useState, useEffect } from 'react';
import _ from "lodash";
import { Grid, Container } from "@mui/material";
import { toast } from "react-toastify";
import { updateTaskList, addDoneTask } from '../../redux/reducers/tasks.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ArrayObjectsProps } from '../../interfaces';
import Button from '../../components/Button';
import TasksList from './tasksList';
import DoneTasksList from './doneTasksList';
import AddTask from './addTask';
import ViewTask from './viewTask';
import { getUniqueList } from "../../helper/getUniqueList";
import "./Tasks.scss";

export default function Tasks() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const listState: ArrayObjectsProps[] = useSelector((state: RootState) => state.tasks.tasks_list);
  const doneListState: ArrayObjectsProps[] = useSelector((state: RootState) => state.tasks.done_tasks_list);
  const [tasksList, setTasksList] = useState<ArrayObjectsProps[]>([])
  const [editValues, setEditValues] = useState<any>()
  const [mode, setMode] = useState<string>('')

  useEffect(() => {
    if (Array.isArray(listState)) setTasksList([...listState]);
  }, [listState])

  useEffect(() => {
    if (!isOpen) setMode('');
  }, [isOpen])

  const handleClearEdit = () => {
    setMode("");
    setEditValues(null);
  }

  const handleViewDoneTasks = () => {
    setMode("done");
    setIsOpen(true);
  }

  const handleCreateTask = () => {
    setMode("add");
    setIsOpen(true);
  }

  const handleDoneTask = (e: React.MouseEvent<HTMLElement>, id: number) => {
    e.stopPropagation();
    const updateTasks = getUniqueList(_.cloneDeep(listState));
    const findTask: ArrayObjectsProps | undefined = listState?.find((d: ArrayObjectsProps) => d.id === id)
    const index: number = listState?.findIndex((d: ArrayObjectsProps) => d.id === id)
    const doneTasksList = _.cloneDeep(doneListState);
    if (findTask) doneTasksList.push(findTask)
    updateTasks.splice(index, 1);
    dispatch(updateTaskList({ updateTasks }));
    dispatch(addDoneTask({ doneTasksList }));
    toast.success('Task has been moved to the done tasks successfully!');
    setIsOpen(false)
  }

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Container>
          <div className="tasks__main">
            {doneListState.length > 0 && mode !== 'done' &&
              <Button
                title="View Done Tasks"
                type="button"
                designType="done-tasks"
                onClick={handleViewDoneTasks}
              />}
            <span className="tasks__main__title">{"Hello world"}</span>
          </div>
        </Container>

        {mode === 'add' || mode === 'edit' ? <AddTask
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          mode={mode}
          editValues={editValues}
          handleClearEdit={handleClearEdit}
        /> : ""}

        {mode === 'done' && <DoneTasksList
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />}

        {mode === 'view' && <ViewTask isOpen={isOpen}
          setIsOpen={setIsOpen}
          editValues={editValues}
          setMode={setMode}
          handleDoneTask={handleDoneTask}
        />}

        {tasksList.length === 0 &&
          <div className='tasks__centered__btn'>
            <Button title="Create Your First Task ;)" type="button" designType="btn" onClick={handleCreateTask} />
          </div>}

        {tasksList.length > 0 &&
          <TasksList
            data={tasksList}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setMode={setMode}
            setEditValues={setEditValues}
            handleDoneTask={handleDoneTask}
          />
        }
      </Grid>
    </Grid>
  )
}
