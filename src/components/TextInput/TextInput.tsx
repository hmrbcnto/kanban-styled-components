import React, { useImperativeHandle, useRef } from 'react';
import * as S from './TextInput.styled';

export interface TextInputProps {
    label: string;
}

export const TextInput = React.forwardRef<HTMLInputElement | null, TextInputProps>((
    {
        label
    },
    ref
) => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(ref, () => inputRef.current);
    return (
        <S.Container>
            <S.Title> {label} </S.Title>
            <S.Input />
        </S.Container>
    )
}) ;
