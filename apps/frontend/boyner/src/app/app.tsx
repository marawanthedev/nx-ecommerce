// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Home from './home/home';
import { Navbar, Footer, Template } from "@e-commerce/lib/ui/e-commerce-components"
import { NavItem } from '@e-commerce/lib/types/e-commerce';

import { Route, Routes } from 'react-router-dom';
import "./app.module.css"

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

  const brand = 'boyner'

  console.log('boyner app')

  return (
    <div className='App' style={{ display: 'flex', flexDirection: 'column', minHeight: "100vh" }}>
      <Template brand={brand} items={items}>
        <Routes>
          <Route
            path="/"
            element={
              <Home />
            }
          />
        </Routes>
      </Template>
      {/* END: routes */}
    </div>
  );
}

export default App;
