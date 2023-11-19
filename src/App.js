import { Box } from '@chakra-ui/react';
import Home from './pages/Home';
import Registers from './pages/Registers';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import Root from './pages/Root';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Registers />} />
      <Route path="app" element={<Home />} />
    </Route>
  )
);

const App = () => {
  return (
    <Box>
      <RouterProvider router={router} />
    </Box>
  );
};

export default App;