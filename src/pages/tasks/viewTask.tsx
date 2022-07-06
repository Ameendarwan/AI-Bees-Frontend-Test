import { useState, useEffect, SetStateAction, Dispatch } from 'react'
import { Grid } from "@mui/material"
import { useSelector } from 'react-redux'
import { ArrayObjectsProps, ObjectProps } from '../../interfaces';
import { RootState } from '../../redux/store';
import { normalButtons } from '../../constants/constants';
import Button from '../../components/Button'
import Modal from '../../components/Modal'

interface ViewTaskProps {
   isOpen: boolean;
   setIsOpen?: Dispatch<SetStateAction<boolean>>;
   editValues: ObjectProps;
}
export interface ButtonListProps {
   id?: number;
   title: string;
   value: boolean;
   designType?: string;
   action: string;
}
const ViewTask: React.FC<ViewTaskProps> = ({ isOpen, editValues }) => {
   const [tasks, setTasks] = useState<any>()
   const doneListState: ArrayObjectsProps[] = useSelector((state: RootState) => state.tasks.done_tasks_list);
   const [buttonsList, setButtonsList] = useState<ButtonListProps[]>([])

   useEffect(() => {
      setTasks([...doneListState])
   }, [doneListState])

   useEffect(() => {
      setButtonsList([...normalButtons])
   }, [])

   const handleActions = (title: string, id: number) => {
      console.log("VIEWW", title, id)
   }

   // const handleDelete = (task: ObjectProps) => {
   //    let newList = [...data];
   //    let index: number = newList.findIndex((t) => t.id === task.id);
   //    if (index !== -1) {
   //       newList.splice(index, 1)
   //       dispatch(deleteTask({ newList }))
   //    }
   // }

   return (
      <Grid container>
         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className='text-center'>
               <Modal isOpen={isOpen}>
                  <div className='tasks__done__tasks__heading'>
                     <span>Done Tasks</span>
                  </div>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="mb-5">
                     <div className="tasks__display__list__items">
                        <div className='tasks__display__list__items__display__flex'>
                           <span>{'Ameen'}</span>
                           <div className='tasks__display__list__items__end__relative'>
                              <span>{"High"}</span>
                              <Button designType={'custom__button__circle__red'} value={true} />
                           </div>
                        </div>
                        <div className='tasks__display__list__items__display__flex__description'>
                           <span>{"Lopaaaaaaaa"}</span>
                        </div>
                     </div>
                  </Grid>
                  <Grid container className='mt-3 tasks__container__circles'>
                     {buttonsList.map((button, index) => (
                        <Grid item xs={12} sm={4} md={4} lg={4} xl={4} key={index}> <Button designType={button?.designType} type="button" value={button.value} onClick={() => handleActions(button.action, index)} /><span className='tasks__label__circle'>{button?.title}</span> </Grid>
                     ))}
                  </Grid>
               </Modal>
            </div>
         </Grid>
      </Grid>
   );
};

export default ViewTask;
