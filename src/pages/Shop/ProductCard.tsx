import { Button, Card, CardActionArea, CardMedia } from "@mui/material"
import { useParams } from "react-router-dom"

export default function ProductCard(props: any) {
    const { product } = props
    const params = useParams()

    return (
        <>
            <Card sx={{ width: '200px' }}>
                <CardMedia>
                    <img src="https://picsum.photos/200/200" alt="product" />
                </CardMedia>
                <CardActionArea sx={{ px: 2 }}>
                    {product.title}
                    <Button color="primary" variant="contained" sx={{ width: '100%', mt: 2 }}>
                        Buy Now
                    </Button>
                </CardActionArea>
            </Card>
        </>
    )
}