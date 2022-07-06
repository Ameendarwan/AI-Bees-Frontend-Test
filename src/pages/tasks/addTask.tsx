import { useState, useEffect, SetStateAction, Dispatch } from 'react';
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { ArrayObjectsProps, ObjectProps } from '../../interfaces';
import { RootState } from '../../redux/store';
import { addTask } from '../../redux/reducers/tasks.reducer';
import { circleButtons } from '../../constants/constants';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
interface AddTaskProps {
   isOpen: boolean;
   editMode?: boolean;
   setIsOpen: Dispatch<SetStateAction<boolean>>;
   editValues: ObjectProps;
   handleClearEdit: () => void;
}
interface ButtonListProps {
   id?: number;
   title: string;
   value: boolean;
   priority: string;
   type: string;
}
const AddTask: React.FC<AddTaskProps> = ({ isOpen, setIsOpen, editValues, editMode, handleClearEdit }) => {
   const dispatch = useDispatch();
   const listState: ArrayObjectsProps[] = useSelector((state: RootState) => state.tasks.tasks_list);
   const [title, setTitle] = useState("")
   const [description, setDescription] = useState("")
   const [gifts, setGifts] = useState("")
   const [priority, setPriority] = useState("low")
   const [buttonsList, setButtonsList] = useState<ButtonListProps[]>([])

   useEffect(() => {
      setButtonsList([...circleButtons])
   }, [])

   useEffect(() => {
      if (editMode) {
         setTitle(editValues.title);
         setDescription(editValues.description);
         setPriority(editValues.priority);
         setGifts(editValues.gifts);
      }
   }, [editMode, editValues])


   const handleAdd = (e: any) => {
      e.preventDefault();
      setIsOpen(false)
      let newList = [...listState];
      let data: ObjectProps = {
         id: newList.length,
         title,
         description,
         priority,
         gifts,
         status: 'pending'
      }
      if (!editMode) newList.push(data);
      else {
         let index = newList.findIndex((t) => t.id === editValues.id)
         newList[index] = data;
      }
      dispatch(addTask({ newList }))
      setTitle("");
      setDescription("");
      setPriority("");
      setGifts("");
      handleClearEdit();
   }

   const handlePriority = (title: string, id: number) => {
      let buttons = [...buttonsList]
      buttons.map((btn: any) => {
         if (btn.id === id) btn.value = true;
         else btn.value = false;
      })
      setPriority(title);
      setButtonsList([...buttons])
   }

   return (
      <div>
         <Modal isOpen={isOpen}>
            <form onSubmit={handleAdd}>
               <Input value={title} placeholder='Task Title' previewMode={false} type={'input'} required={true} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
               <div className='mt-3'>
                  <Input value={description} placeholder='Task Description' previewMode={false} type={'description'} required={true} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} />
               </div>
               <div className='mt-3'>
                  <Input value={gifts} placeholder='Gifts and KPI for this task ;)' previewMode={false} type={'input'} required={true} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setGifts(e.target.value)} />
               </div>
               <Grid container className='mt-3 tasks__container__circles'>
                  {buttonsList.map((circle, index) => (
                     <Grid item xs={12} sm={4} md={4} lg={4} xl={4} key={index}> <Button designType={circle?.type} type="button" value={circle.value} onClick={() => handlePriority(circle.title, index)} /><span className='tasks__label__circle'>{circle?.title}</span> </Grid>
                  ))}
               </Grid>
               <div className='text-center mt-5 mb-1'>
                  <Button title={editMode ? "Update Task" : "Add To Tasks"} type="submit" designType="btn" />
               </div>
            </form>
         </Modal>
      </div>
   );
};

export default AddTask;
