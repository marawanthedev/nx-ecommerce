import React from 'react'
import { Page, ProductCategoryHeader, ProductCard } from "@e-commerce/lib/ui/e-commerce-components"
import { Product } from "@e-commerce/lib/types/e-commerce"
import { useProduct } from '@e-commerce/lib/services/hooks'

import "./home.css"

export default function Home() {
    const { categorizedProducts, isLoading } = useProduct({ url: 'https://dummyjson.com' })


    const onAddToCart = () => {
        console.log('add to card')
    }
    const onViewDetails = () => {
        console.log('view details')
    }


    return (
        <Page className="home" isLoading={isLoading}>

            {Object.keys(categorizedProducts).map((category) => {
                return <div aria-label={`${category} product list header`} className='category-product-list'>

                    <ProductCategoryHeader className="product-list-header" category={category} categoryProductsNumber={category.length} />

                    <div className="product-list">
                        {categorizedProducts[category].map((product: Product) => {
                            return <ProductCard seller='trendyol' product={product} onAddToCart={onAddToCart} onViewDetails={onViewDetails} />
                        })}
                    </div>
                </div>
            })}

        </Page>
    )
}
