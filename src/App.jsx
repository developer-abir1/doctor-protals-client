import { RouterProvider } from 'react-router-dom';
import routers from './components/router/Router';
import 'swiper/css';
import 'react-day-picker/dist/style.css';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div>
      <RouterProvider router={routers} />
      <Toaster />
    </div>
  );
}

export default App;
