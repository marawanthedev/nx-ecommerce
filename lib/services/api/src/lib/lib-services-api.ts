
let baseUrl: string | null | undefined;


function setBaseUrl(url: string) {
  baseUrl = url;
}

// get products
// get categories
// and so on

const centralizedFetch = async (url: string, options: RequestInit = {}) => {
  if (baseUrl === '' || baseUrl === null || !baseUrl) throw new Error('baseUrl not set')
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
  getAllCategories,
  setBaseUrl
}

// get by id
