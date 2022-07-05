import React, { useState, useEffect } from 'react'
import { Grid } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store';

export default function TasksList() {
   const newList = useSelector((state: RootState) => state.tasks.tasks_list);
   const [tasksList, setTasksList] = useState([])

   useEffect(() => {
   console.log("List", newList)
   }, [newList])

   return (
      <Grid container>
         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div>

            </div>
         </Grid>
      </Grid>
   )
}
