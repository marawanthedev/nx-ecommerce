import React, { useEffect, useMemo } from 'react'
import { Page, ProductCategoryHeader, ProductCard } from "@e-commerce/lib/ui/e-commerce-components"
import { ApiService } from "@e-commerce/lib/services/api"
import { Product } from "@e-commerce/lib/types/e-commerce"
import { useProduct } from '@e-commerce/lib/services/hooks'

import "./home.css"

export default function Home() {
    const { products, categorizedProducts, isLoading } = useProduct({ url: 'https://dummyjson.com' })


    const onAddToCart = () => {
        console.log('add to card')
    }
    const onViewDetails = () => {
        console.log('view details')
    }


    return (
        <Page className="home">

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
