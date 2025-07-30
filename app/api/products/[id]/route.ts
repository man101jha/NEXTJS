import { NextRequest } from "next/server";
// import { products } from "@/app/product-data";
import { connectToDB } from "../../db";
type Params={
    id:String
}
export async function GET(request:NextRequest,{params}:{params:Params}){
    const {db}=await connectToDB();



    const productId=params.id;
    const product=await db.collection('products').findOne({id:productId});
    if(!product){
        return new Response("Product not found",{
            status:404
        })
    }
    return new Response(JSON.stringify(product),{
        status:200,
        headers:{
            "Content-Type":"application/json"
        }
    })

}