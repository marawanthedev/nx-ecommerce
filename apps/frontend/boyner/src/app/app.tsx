// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Home from './home/home';
import { Navbar } from "@e-commerce/lib/ui/e-commerce-components"
import { NavItem } from '@e-commerce/lib/types/e-commerce';

import { Route, Routes } from 'react-router-dom';

export function App() {

  const items: NavItem[] = [
    {
      name: "Home",
      link: "/"
    }
  ]
  return (
    <div>
      <Navbar items={items} brand='boyner' />
      <Routes>
        <Route
          path="/"
          element={
            <Home />
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
