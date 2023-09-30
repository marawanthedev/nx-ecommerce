import React from 'react'

import { NavItem, NavbarProps } from "@e-commerce/lib/types/e-commerce"

function Navbar({ items, brand }: NavbarProps) {
    return (
        <nav>
            <h1 aria-label={`${brand}-navigation-brand`}>{brand}</h1>
            <ul aria-label={`${brand}-navigation-items`}>
                {items.map((item: NavItem) => {
                    return <li aria-label={`${brand}-navigation-item`}>{item.name}</li>
                })}
            </ul>
        </nav>
    )
}



export { Navbar }