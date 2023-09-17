import { FC } from "react";
import { useRoutes } from "react-router-dom";
import * as BoardRouter from './board';

export const Router: FC = () => {
    const routes = useRoutes([...BoardRouter.routes]);
    
    return <>{routes}</>
};