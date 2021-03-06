import { useState, useEffect, SetStateAction, Dispatch } from 'react';
import { Grid } from "@mui/material";
import _ from "lodash";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux';
import { ArrayObjectsProps } from '../../interfaces';
import { RootState } from '../../redux/store';
import { deleteTask } from '../../redux/reducers/tasks.reducer';
import { normalButtons } from '../../constants/constants';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

interface ViewTaskProps {
   isOpen: boolean;
   setMode: Dispatch<SetStateAction<string>>;
   setIsOpen: Dispatch<SetStateAction<boolean>>;
   editValues: ArrayObjectsProps;
   handleDoneTask: (e: React.MouseEvent<HTMLElement>, id: number) => void;
}
interface ButtonListProps {
   id: number;
   title: string;
   value: boolean;
   designType?: string;
   action: 'edit' | 'delete' | 'done' | string;
}
const ViewTask = ({ isOpen, editValues, setMode, setIsOpen, handleDoneTask }: ViewTaskProps) => {
   const dispatch = useDispatch();
   const listState: ArrayObjectsProps[] = useSelector((state: RootState) => state.tasks.tasks_list);
   const [buttonsList, setButtonsList] = useState<ButtonListProps[]>([])

   useEffect(() => {
      setButtonsList([...normalButtons])
   }, [])

   const handleDelete = (id: number) => {
      const newList = _.cloneDeep(listState);
      const index: number = newList.findIndex((t) => t.id === id);
      if (index !== -1) {
         newList.splice(index, 1)
         dispatch(deleteTask({ newList }))
         toast.success('Task has been deleted successfully!');
         setIsOpen(false)
      }
   }

   const handleEdit = () => {
      setMode('edit');
   }
   const handleActions = (e: React.MouseEvent<HTMLElement>, title: 'edit' | 'delete' | 'done' | string, id: number) => {
      if (title === 'delete') handleDelete(id);
      else if (title === "done") handleDoneTask(e, id);
      else handleEdit();
   }

   return (
      <Grid container>
         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className='text-center'>
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
                        <Grid container item xs={12} sm={12} md={9} lg={9} xl={9} className="mb-5">
                           <div className="my-5">
                              <p className='text-justify'>{editValues?.description}</p>
                           </div>
                        </Grid>
                     </Grid>
                  </Grid>
                  <Grid container className='mt-3 tasks__container__normal__buttons'>
                     {buttonsList.map((button, index) => (
                        <Grid item xs={12} sm={4} md={4} lg={4} xl={4} key={index}> <Button designType={`${button?.designType} mb-3`} type="button" value={button.value} title={button?.title} onClick={(e: React.MouseEvent<HTMLElement>) => handleActions(e, button.action, editValues.id)} /></Grid>
                     ))}
                  </Grid>
               </Modal>
            </div>
         </Grid>
      </Grid >
   );
};

export default ViewTask;
