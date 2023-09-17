import { RouteObject } from "react-router-dom";
import { RoutePath } from "./constants";
import { Board } from "../pages/Board";
import { BoardLayout } from "../components/layouts";


export const routes: RouteObject[] = [
    {
        path: RoutePath.board,
        element: <BoardLayout />,
        children: [
            {
                path: RoutePath.board,
                element: <Board />,
            }
        ]
    },
];
