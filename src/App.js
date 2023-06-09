import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.route';
import Navigation from './routes/navigation/navigation.route';
import Authentication from './routes/authentication/authentication.route';

const Shop = () => {
  return <h1>Shopping page</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};
export default App;
