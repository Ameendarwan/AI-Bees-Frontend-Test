import { useState, useEffect, SetStateAction, Dispatch } from 'react';
import { Grid, Container } from "@mui/material";
import { ArrayObjectsProps } from '../../interfaces';
import Button from '../../components/Button';
interface TaskListProps {
   data: ArrayObjectsProps[];
   isOpen?: boolean;
   setMode: Dispatch<SetStateAction<string>>;
   setIsOpen: Dispatch<SetStateAction<boolean>>;
   setEditValues: Dispatch<SetStateAction<ArrayObjectsProps>>;
   handleDoneTask: (e: React.MouseEvent<HTMLElement>, id: number) => void;
}
const TasksList = ({ data, setIsOpen, setEditValues, setMode, handleDoneTask }: TaskListProps) => {
   const [tasks, setTasks] = useState<ArrayObjectsProps[]>()

   useEffect(() => {
      setTasks([...data])
   }, [data])

   const handleEdit = (e: React.MouseEvent<HTMLElement>, task: ArrayObjectsProps) => {
      e.stopPropagation();
      setMode("edit")
      setEditValues(task)
      setIsOpen(true)
   }

   const handleViewTask = (task: ArrayObjectsProps) => {
      setEditValues(task);
      setMode("view");
      setIsOpen(true);
   }

   const handleAddTask = () => {
      setMode("add");
      setIsOpen(true);
   }

   return (
      <Container>
         <Grid container>
            {tasks?.map((task: ArrayObjectsProps, index: number) => (
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
                           <Button designType={'custom__button__normal__yellow mt-3'} value={true} type="button" title="Done Task" onClick={(e: React.MouseEvent<HTMLElement>) => handleDoneTask(e, task.id)} />
                           <Button designType={'custom__button__normal__green mt-3'} value={true} type="button" title="Edit Task" onClick={(e: React.MouseEvent<HTMLElement>) => handleEdit(e, task)} />
                        </div>
                     </div>
                  </div>
               </Grid>
            ))}
            <div className='mt-5 ms-auto'>
               <Button designType={'circle-add'} type="button" onClick={handleAddTask} />
            </div>
         </Grid>
      </Container>
   )
}
export default TasksList;
