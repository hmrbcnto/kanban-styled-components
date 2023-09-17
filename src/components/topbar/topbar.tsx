import { FC } from 'react';
import * as S from './topbar.styled';

export const Topbar: FC = () => {
    return (
        <S.Container>
            <S.LogoContainer>
                <S.Logo />
            </S.LogoContainer>
        </S.Container>
    )
}