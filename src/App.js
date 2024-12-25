

import ProtectedRoute from './Auth/ProtectedRoute';

import Home from './Home';
import './index.css';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
<>


      <ProtectedRoute>
      <Home></Home>
      </ProtectedRoute>

  


</>
  );
}

export default App;
