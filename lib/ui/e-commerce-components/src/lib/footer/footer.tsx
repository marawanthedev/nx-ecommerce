import React from 'react'
import { FooterProps } from '@e-commerce/lib/types/e-commerce'
import { Typography, Grid } from "@mui/material"
import "./footer.css"

function Footer({ brand, items }: FooterProps) {
    return (
        <footer className='footer'>
            <Grid container direction={"column"} spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={4}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            textAlign: 'center'
                        }}
                    >
                        {brand}
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <ul aria-label='navigation list'>
                        {items?.map((item, index) => {
                            return <li aria-label='navigation list item' key={index}><Typography>{item.name}</Typography></li>
                        })}
                    </ul>
                </Grid>
            </Grid>
        </footer>
    )
}

export { Footer }



