import { useAxios } from '../../hooks/useAxios'
import Products from './Products'

export default function Shop() {
    const [data, error] = useAxios({ url: 'https://fakestoreapi.com/products/categories' })

    return (
        <div>
            <h1> THE SHOP </h1>
            <p style={{ letterSpacing: '0.2em' }}>
                {
                    data ?
                        data?.map(
                            (category: string) =>
                                <span style={{ marginRight: '1em' }}>
                                    {category}
                                </span>)
                        : String(error)
                }
            </p>
            <Products />
        </div>
    )
}