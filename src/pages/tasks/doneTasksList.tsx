import { useState, useEffect, SetStateAction, Dispatch } from 'react';
import { Grid } from "@mui/material";
import { useSelector } from 'react-redux';
import { ArrayObjectsProps, ObjectProps } from '../../interfaces';
import { RootState } from '../../redux/store';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
interface AddTaskProps {
   isOpen: boolean;
   setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const DoneTasksList: React.FC<AddTaskProps> = ({ isOpen, setIsOpen }) => {
   const [tasks, setTasks] = useState<any>()
   const doneListState: ArrayObjectsProps[] = useSelector((state: RootState) => state.tasks.done_tasks_list);

   useEffect(() => {
      setTasks([...doneListState])
   }, [doneListState])

   return (
      <div className='text-center'>
         <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className='tasks__done__tasks__heading'>
               <span>Done Tasks</span>
            </div>
            {tasks?.map((task: ObjectProps) => (
               <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="mb-5" key={task.id}>
                  <div className="tasks__display__list__items">
                     <div className='tasks__display__list__items__display__flex__done'>
                        <span>{task?.title}</span>
                        <div className='tasks__display__list__items__end__relative'>
                           <span>{task.priority}</span>
                           <Button designType={
                              task.priority === "Low" ? 'custom__button__circle__green' :
                                 task.priority === "Medium" ? 'custom__button__circle__yellow' :
                                    'custom__button__circle__red'}
                              value={true} />
                        </div>
                     </div>
                     <div className='tasks__display__list__items__display__flex__description__done__tasks'>
                        <span>{task.description}</span>
                     </div>
                  </div>
               </Grid>
            ))}
         </Modal>
      </div>
   );
};

export default DoneTasksList;
