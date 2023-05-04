import axios from "axios"
import { useEffect, useState } from "react"


export const useAxios = (props: { url: string, payload?: any }) => {
    const { url } = props

    const [data, setData] = useState<any>(null)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        get(url)
    }, [])

    const get = async (url: string) => {
        axios
            .get(url)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                setError(err.message)
            })
    }

    return [
        data,
        error,
    ]
}