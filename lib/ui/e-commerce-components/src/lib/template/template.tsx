import React from 'react'
import { Footer, Navbar } from '../components'
import { TemplateProps } from "@e-commerce/lib/types/e-commerce"
import "./template.css"


function Template({ children, items, brand }: TemplateProps) {
    return (
        <div className='template'>
            <Navbar brand={brand} items={items} />
            <main>{children}</main>
            <Footer brand={brand} items={items} />
        </div>
    )
}

export { Template }