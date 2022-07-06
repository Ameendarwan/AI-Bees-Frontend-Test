import React, { useState, useEffect } from 'react'
import { Grid } from "@mui/material"
import { ArrayObjectsProps, ObjectProps } from '../../interfaces';

interface TaskListProps {
   data: ArrayObjectsProps[],
}
const TasksList = ({ data }: TaskListProps) => {
   const [tasks, setTasks] = useState<ArrayObjectsProps[]>([])

   useEffect(() => {
      setTasks([...data])
   }, [data])

   return (
      <Grid container>
         <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <div>

            </div>
         </Grid>
      </Grid>
   )
}
export default TasksList;
