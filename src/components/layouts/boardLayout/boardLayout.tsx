import { FC } from 'react';
import * as S from './boardLayout.styled';
import { Outlet } from 'react-router-dom';
import { Topbar } from '../../topbar';

export const BoardLayout: FC = () => {
    return (
        <S.Container>
            <Topbar />
            <Outlet />
        </S.Container>
    );
}