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
   setIsOpen: Dispatch<SetStateAction<boolean>>;
   editValues: ObjectProps;
}
export interface ButtonListProps {
   id?: number;
   title: string;
   value: boolean;
   designType?: string;
   action: string;
}
const ViewTask: React.FC<ViewTaskProps> = ({ isOpen, editValues, setIsOpen }) => {
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
            <div className='text-center overflow-auto'>
               <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="mb-5">
                     <div className="tasks__view__heading">
                        <Button designType={
                           editValues.priority === "Low" ? 'custom__button__circle__green' :
                              editValues.priority === "Medium" ? 'custom__button__circle__yellow' :
                                 'custom__button__circle__red'}
                           value={true}
                           type="button"
                        />
                        <span className="tasks__view__heading__priority__title">{editValues?.priority}</span>
                        <span className="tasks__view__heading__task__title">{editValues?.title}</span>
                     </div>
                     <Grid container justifyContent={"center"}>
                        <Grid container item xs={12} sm={12} md={6} lg={6} xl={6} className="mb-5">
                           <div className="justify-center mb-5">
                              <p>
                                 asc ccccc cccccc cccc ccccc ccccccc ccccccc ccccccc ccccc ccccccc
                                 asc ccccc cccccc cccc ccccc ccccccc ccccccc ccccccc ccccc ccccccc
                                 asc ccccc cccccc cccc ccccc ccccccc ccccccc ccccccc ccccc ccccccc
                              </p>
                           </div>
                        </Grid>
                     </Grid>
                  </Grid>
                  <Grid container className='mt-3 tasks__container__circles'>
                     {buttonsList.map((button, index) => (
                        <Grid item xs={12} sm={4} md={4} lg={4} xl={4} key={index}> <Button designType={button?.designType} type="button" value={button.value} title={button?.title} onClick={() => handleActions(button.action, index)} /></Grid>
                     ))}
                  </Grid>
               </Modal>
            </div>
         </Grid>
      </Grid >
   );
};

export default ViewTask;
