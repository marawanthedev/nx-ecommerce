import React from 'react'
import "./productCategoryHeader.css"
import { Typography } from '@mui/material';


interface ProductCategoryHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    category: string;
    categoryProductsNumber: number;
}

function ProductCategoryHeader({ category, categoryProductsNumber, className, ...rest }: ProductCategoryHeaderProps) {
    return (
        <div aria-label='Product category header' className={`${className} product-category-header`} {...rest}>
            <Typography variant="h5" component="h5">
                {category}
            </Typography>
            <Typography variant="body2" component="span">
                ({categoryProductsNumber})
            </Typography>
        </div>
    )
}




export { ProductCategoryHeader }