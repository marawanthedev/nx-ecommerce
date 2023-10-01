import React from 'react'
import "./page.css"
import { LoadingOverlay } from '../components'

interface PageProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode,
    isLoading: boolean
}

function Page({ children, className, isLoading = false }: PageProps) {
    return (
        <main aria-label='page main content' role='main' className={`page ${className}`}>
            {isLoading && <LoadingOverlay />}
            {children}
        </main>
    )
}

export { Page }