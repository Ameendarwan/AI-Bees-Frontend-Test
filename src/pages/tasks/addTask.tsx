import { useState, useEffect } from 'react'
import { Grid } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'
import { ArrayObjectsProps, ObjectProps } from '../../interfaces';
import { RootState } from '../../redux/store';
import { addTask } from '../../redux/reducers/tasks.reducer';
import { circleButtons } from '../../constants/constants';
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import Input from '../../components/Input'

interface AddTaskProps {
   isOpen: boolean,
}

interface ButtonListProps {
   id?: number,
   title: string,
   value: boolean,
   priority: string,
   type: string,
}
const AddTask: React.FC<AddTaskProps> = ({ isOpen }) => {
   const dispatch = useDispatch();
   const listState: ArrayObjectsProps[] = useSelector((state: RootState) => state.tasks.tasks_list);
   const [title, setTitle] = useState("")
   const [description, setDescription] = useState("")
   const [priority, setPriority] = useState("")
   const [buttonsList, setButtonsList] = useState<ButtonListProps[]>([])

   useEffect(() => {
      setButtonsList([...circleButtons])
   }, [])

   const handleAdd = (e: any) => {
      e.preventDefault();
      let newList = [...listState];
      let data: ObjectProps = {
         id: newList.length,
         title,
         description,
         priority
      }
      newList.push(data);
      dispatch(addTask({ newList }))
   }

   const handlePriority = (id: number) => {
      let buttons = [...buttonsList]
      buttons.map((btn: any) => {
         if (btn.id === id) btn.value = true;
         else btn.value = false;
      })
      setButtonsList([...buttons])
   }
   return (
      <div>
         <Modal isOpen={isOpen}>
            <form onSubmit={handleAdd}>
               <Input value={title} placeholder='Task Title' previewMode={false} type={'input'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
               <div className='mt-3'>
                  <Input value={description} placeholder='Task Description' previewMode={false} type={'description'} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)} />
               </div>
               <Grid container className='mt-3 tasks__container__circles'>
                  {buttonsList.map((circle, index) => (
                     <Grid item xs={12} sm={4} md={4} lg={4} xl={4}> <Button type={circle?.type} value={circle.value} onClick={() => handlePriority(index)} /><span className='tasks__label__circle'>{circle?.title}</span> </Grid>
                  ))}
               </Grid>
               <div className='text-center mt-5 mb-1'>
                  <Button title="Add To Tasks" type="submit" />
               </div>
            </form>
         </Modal>
      </div>
   );
};

export default AddTask;
