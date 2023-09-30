const baseUrl = 'https://dummyjson.com'


// get products
// get categories
// and so on

const centralizedFetch = async (url: string, options: RequestInit = {}) => {
  try {
    const res = await fetch(`${baseUrl}${url}`, options)
    const data = await res.json();
    return data
  }
  catch (err) {
    throw new Error(`error fetching ${url}`)
  }
}


async function getAllProducts() {
  const products = centralizedFetch('/products')
  return products;
}
async function getAllCategories() {
  const categories = centralizedFetch('/categories')
  return categories;
}



export const ApiService = {
  getAllProducts,
  getAllCategories
}

// get by id
