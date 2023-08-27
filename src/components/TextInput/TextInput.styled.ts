import styled from 'styled-components';
import { basePalette, typography } from '../../theme';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    position: relative;
`;

export const Title = styled.span`
    ${typography.heading.headingS};
`;

export const Placeholder = styled.span`
  ${typography.body.large};
  color: ${basePalette.black};
  opacity: 0.25;
`;

export const Input = styled.input`
  ${typography.body.large};
  border-radius: 4px;
  background: ${basePalette.white.main};
  color: ${basePalette.black.main};
  font-weight: 500;
`;

