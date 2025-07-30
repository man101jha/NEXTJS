import ProductList from '../productlist';
// import { products } from '../product-data';
export const dynamic ='force-dynamic'

export default async function ProductsPage() {
  const response= await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/products',{
    cache:'no-cache'
  })
  const products=await response.json();
  const response2=await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/user/1/cart',{
    cache:'no-cache'
  })
  const cartProduct=await response2.json();
  return (
    <div className="container mx-auto p-8"> 
      <h1 className="text-4xl font-bold mb-8">Products</h1> 
      <ProductList products={products} initialCartProducts={cartProduct} />
    </div>
  );
}