import { useEffect, useState } from 'react'

import ThemeProvider from "./shared/contexts/themeProvider";
import ApiProvider from "./shared/contexts/apiProvider";

import { Button, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";


const Router = () => {
   
   const [fetchNo, setFetchNo] = useState(0);
   
   
   
   const {data} = useQuery(['cokolwiek'], async () => await (await fetch('https://picsum.photos/v2/list?page=1&limit=50')).json());
   
   
   // useQuery({
   //    queryKey: ['todos', todoId],
   //    queryFn: async () => {
   //       const response = await fetch('/todos/' + todoId)
   //       if (!response.ok) {
   //          throw new Error('Network response was not ok')
   //       }
   //       return response.json()
   //    },
   // })
   
   console.log(data)
   
   return (
      <div>
         <Button>Click me!</Button>
         <Typography variant="h1">Hello World!</Typography>
      </div>
   )
}


function App() {
   
   return (
      <ApiProvider>
         <ThemeProvider>
            <Router/>
         </ThemeProvider>
      </ApiProvider>
   )
}

export default App
