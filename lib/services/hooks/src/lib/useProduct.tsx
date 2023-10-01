import React, { useEffect, useMemo, useState } from "react";
import { Product } from "@e-commerce/lib/types/e-commerce";
import { ApiService } from "@e-commerce/lib/services/api";

interface useProductProps {
    url: string
}
const useProduct = ({ url }: useProductProps) => {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)


    const fetchProducts = async () => {
        setIsLoading(true)
        const { products } = await ApiService.getAllProducts()
        setProducts(products)
        setIsLoading(false)
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
        if (url) {
            ApiService.setBaseUrl(url)
            fetchProducts()
        }
    }, [url])

    return { products, categorizedProducts, isLoading }

}

export { useProduct };