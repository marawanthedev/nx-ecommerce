import React, { useEffect, useMemo } from 'react'
import "./home.css"
import { Page, ProductCategoryHeader, ProductCard } from "@e-commerce/lib/ui/e-commerce-components"
import { ApiService } from "@e-commerce/lib/services/api"
import { Product } from "@e-commerce/lib/types/e-commerce"



export default function Home() {
    const [products, setProducts] = React.useState<Product[]>([])

    const fetchProducts = async () => {
        const { products } = await ApiService.getAllProducts()
        setProducts(products)
    }

    const categorizedProducts = useMemo(() => {
        const categorizedProducts: Record<string, Product[]> = {}

        products.forEach(product => {
            if (!categorizedProducts[product.category]) {
                categorizedProducts[product.category] = []
            }
            categorizedProducts[product.category].push(product)
        })

        return categorizedProducts;
    }, [products])



    useEffect(() => {
        ApiService.setBaseUrl('https://dummyjson.com')
        fetchProducts()
    }, [])


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
                            return <ProductCard seller='boyner' product={product} onAddToCart={onAddToCart} onViewDetails={onViewDetails} />
                        })}
                    </div>
                </div>
            })}

        </Page>
    )
}
