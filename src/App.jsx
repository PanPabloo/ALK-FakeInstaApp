import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { RouterProvider } from "react-router-dom";
import { router } from "./route/router.jsx";

const queryClient = new QueryClient()

export default function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <RouterProvider router={router}/>
         
         {/*REACT QUERY DEVELOP TOOL*/}
         {/*<ReactQueryDevtools initialIsOpen />*/}
      </QueryClientProvider>
   )
}

