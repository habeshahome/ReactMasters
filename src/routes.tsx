import axios from 'axios'
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Shop from './pages/Shop/Shop';
import { Product } from './pages/Shop';
import { Game } from './pages/Game';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
    {
        path: "/game",
        element: <Game />
    },
    {
        path: "/shop",
        element: <Shop />
    },
    {
        path: '/shop/:category?/:productId',
        element: <Product />,
        loader: async ({ request, params }) => {
            return axios.get(`https://fakestoreapi.com/products/${params.productId}`)
                .then((res) => {
                    console.log(res.data)
                })
        },
        action: async ({ request }) => {
            return axios.get(`https://fakestoreapi.com/products/`)
        },
        errorElement: <div> Error </div>
    },
])


/**
interface RouteObject {
  path?: string;
  index?: boolean;
  children?: React.ReactNode;
  caseSensitive?: boolean;
  id?: string;
  loader?: LoaderFunction;
  action?: ActionFunction;
  element?: React.ReactNode | null;
  Component?: React.ComponentType | null;
  errorElement?: React.ReactNode | null;
  ErrorBoundary?: React.ComponentType | null;
  handle?: RouteObject["handle"];
  shouldRevalidate?: ShouldRevalidateFunction;
  lazy?: LazyRouteFunction<RouteObject>;
}
 */