import { RouteObject } from "react-router-dom";
import { RoutePath } from "./constants";
import { Board } from "../pages/Board";


export const routes: RouteObject[] = [
    {
        path: RoutePath.board,
        element: <Board />,
    },
];
