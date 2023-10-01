// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';


import { Route, Routes } from 'react-router-dom';
import Home from './home/home';
import { Template } from '@e-commerce/lib/ui/e-commerce-components';
import { NavItem } from '@e-commerce/lib/types/e-commerce';

export function App() {

  const items: NavItem[] = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Cart",
      link: "/cart"
    }
  ]

  const brand = 'trendyol'

  return (
    <div>
      <Template items={items} brand={brand}>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </Template>
    </div>
  );
}

export default App;
