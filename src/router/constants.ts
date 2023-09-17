import { Params } from 'react-router-dom';

export enum RoutePath {
    home = '/',
    board = '/board',
    auth = '/auth',
}

export interface RouteParams {
    [RoutePath.home]: Params;
    [RoutePath.board]: Params;
    [RoutePath.auth]: Params;
}
