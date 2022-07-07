import { useState, useEffect, SetStateAction, Dispatch } from 'react';
import { Grid, Container } from "@mui/material";
import _ from "lodash";
import { ObjectProps } from '../../interfaces';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { addDoneTask, editTask } from '../../redux/reducers/tasks.reducer';
import { getUniqueList } from "../../helper/getUniqueList";
interface TaskListProps {
   data: any;
   data2: any;
   isOpen?: boolean;
   setEditMode?: any;
   setViewMode: Dispatch<SetStateAction<boolean>>;
   setIsOpen: Dispatch<SetStateAction<boolean>>;
   setEditValues: Dispatch<SetStateAction<any>>;
}
const TasksList = ({ data, data2, setIsOpen, setEditMode, setEditValues, setViewMode }: TaskListProps) => {
   const dispatch = useDispatch()
   const [tasks, setTasks] = useState<any>()
   const [doneTasks, setDoneTasks] = useState<any>()

   useEffect(() => {
      setTasks([...data])
   }, [data])

   useEffect(() => {
      setDoneTasks([...data2])
   }, [data2])

   const handleEdit = (e: React.MouseEvent<HTMLElement>, task: ObjectProps) => {
      e.stopPropagation();
      setEditMode(true)
      setEditValues(task)
      setIsOpen(true)
   }

   const handleDoneTask = (e: React.MouseEvent<HTMLElement>, task: ObjectProps, index: number) => {
      e.stopPropagation();
      let editTasks = getUniqueList(_.cloneDeep(data));
      let findTask: any = tasks.find((d: ObjectProps) => d.id === task.id)
      let doneTasksList = _.cloneDeep(doneTasks);
      doneTasksList.push(findTask)
      editTasks.splice(index, 1);
      dispatch(editTask({ editTasks }));
      dispatch(addDoneTask({ doneTasksList }));
   }

   const handleViewTask = (task: ObjectProps) => {
      setEditValues(task)
      setViewMode(true)
      setIsOpen(true)
   }

   return (
      <Container>
         <Grid container>
            {tasks?.map((task: ObjectProps, index: number) => (
               <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="mb-5" key={index}>
                  <div className="tasks__display__list__items" onClick={() => handleViewTask(task)}>
                     <div className='tasks__display__list__items__display__flex'>
                        <span>{task.title}</span>
                        <div className='tasks__display__list__items__end__relative'>
                           <span>{task.priority}</span>
                           <Button designType={
                              task.priority === "Low" ? 'custom__button__circle__green' :
                                 task.priority === "Medium" ? 'custom__button__circle__yellow' :
                                    'custom__button__circle__red'}
                              value={true}
                              type="button"
                           />
                        </div>
                     </div>
                     <div className='tasks__display__list__items__display__flex__description'>
                        <span>{task.description}</span>
                        <div className='tasks__display__list__items__end__relative mt-3'>
                           <Button designType={'custom__button__circle__red'} type="button" title="Done Task" onClick={(e: React.MouseEvent<HTMLElement>) => handleDoneTask(e, task, index)} />
                           <Button designType={'custom__button__circle__red'} type="button" title="Edit Task" addClasses={'ml-2'} onClick={(e: React.MouseEvent<HTMLElement>) => handleEdit(e, task)} />
                        </div>
                     </div>
                  </div>
               </Grid>
            ))}
            <div className='mt-5 ms-auto'>
               <Button designType={'circle-add'} type="button" onClick={() => setIsOpen(true)} />
            </div>
         </Grid>
      </Container>
   )
}
export default TasksList;
