import {
   QueryClient,
   QueryClientProvider,
} from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import './App.css';
import { PhotoGallery } from "./components/PhotoGallery";

const queryClient = new QueryClient()

export default function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <PhotoGallery />
         <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
   )
}

