import styled from 'styled-components';
import { ReactComponent as LogoLight } from '../../assets/logo-light.svg';


export const Container = styled.div`
    position: fixed;
    top: 0;
    height: 96px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    width: 100%;
    background: ${({ theme }) => theme.palette.white.main};
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 35px 32.47px 35.78px 24px;
    border-right: solid 1px ${({ theme }) => theme.palette.lines.light};
`;

export const Logo = styled(LogoLight)`
    g {
        fill: unset;
        path: {
            fill: unset;
        }
    }
`;
