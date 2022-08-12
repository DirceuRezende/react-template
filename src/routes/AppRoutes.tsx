import Counter from '@/features/counter/pages/Home';

import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Counter />} />
    </Routes>
  );
};

export default AppRoutes;
