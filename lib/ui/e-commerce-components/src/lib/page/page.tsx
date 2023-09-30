import React from 'react'
import "./page.css"

interface PageProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode,
}

function Page({ children, className }: PageProps) {
    return (
        <main aria-label='page main content' role='main' className={`page ${className}`}>{children}</main>
    )
}

export { Page }