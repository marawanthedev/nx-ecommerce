import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from "@e-commerce/lib/types/e-commerce"
import { Grid } from '@mui/material';

import "./ProductCard.css"

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
    product: Product
    onAddToCart: () => void
    onViewDetails: () => void
    seller: string
}

function ProductCard({ product, seller, onAddToCart, onViewDetails, className, ...rest }: ProductCardProps) {
    return (
        <Card sx={{ maxWidth: 345, cursor: "pointer", }}  className={className} onClick={onViewDetails} {...rest}>
            <CardMedia
                component="img"
                
                alt={`${product.title} image`}
                height="180"
                image={product.thumbnail}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography className='product-card-desc' variant="body1" color="text.secondary">
                    {product.description}
                </Typography>
                <Grid container justifyContent="space-between">
                    <Grid item xs={6}>
                        <Typography variant="body1" color="text.secondary">
                            Brand: {product.brand}
                        </Typography>
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                        <Typography variant="body1" color="text.secondary">
                            Seller:{seller}
                        </Typography>
                    </Grid>
                </Grid>
                <Typography variant="body1" color="navy">
                    ${product.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onAddToCart}>Add to Cart</Button>
                <Button size="small" onClick={onViewDetails}>View Details</Button>
            </CardActions>
        </Card>
    );
}

export { ProductCard }