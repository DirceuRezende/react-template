import Counter from '@/features/counter/pages/Home';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Counter />} />
    </Routes>
  );
}

export default App;
