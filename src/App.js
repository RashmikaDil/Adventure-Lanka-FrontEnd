import targetRef from './Home'
import Header from './components/Header';
import Home from './Home';
import './index.css';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
<>

<Home></Home>
<Header></Header>
<div ref={targetRef} className='h-[200vb]'></div>
</>
  );
}

export default App;
