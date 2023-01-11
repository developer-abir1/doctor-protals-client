import { RouterProvider } from 'react-router-dom';
import routers from './components/router/Router';
import 'swiper/css';
import 'react-day-picker/dist/style.css';

function App() {
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
