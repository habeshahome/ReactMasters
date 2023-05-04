import { Box } from "@mui/material"
import { useParams } from "react-router-dom"
import {useAxios} from '../../hooks/useAxios'
import ProductCard from "./ProductCard"

export default function Products(props: { children?: React.ReactNode }) {
    const { children } = props
    const params = useParams()
    const [data, error ] = useAxios({ url: 'https://fakestoreapi.com/products' })
    return (
        <>
            <h1> Products {String(params['*'])}</h1>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', gap: 3, flexWrap: 'wrap'}}>
                {
                        data?.map((product: any, index: number) =>
                            <ProductCard key={index} product={product} />
                        )
                }
            </Box>
        </>
    )
}