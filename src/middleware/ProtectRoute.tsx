import { Link, Outlet } from "react-router-dom";

export const ProtectRoute = (
    props: {
        user: Object,
        allowed?: boolean,
        children: React.ReactNode,
        fallbackUrl: string
    }) => {
    const { user, allowed, children, fallbackUrl } = props

    if (user) {
        return <Link to={fallbackUrl} replace />
    }

    return <Outlet />
}