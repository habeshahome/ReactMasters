import { useParams } from "react-router-dom"

export default function Product () {
    const params = useParams() 

    console.log(params.category)
    console.log(params.productId)

    // or
    console.log(params['*'])
    return (
        <> 
            <h1> Product { String(params['*'])} </h1>
        </>
    )
}