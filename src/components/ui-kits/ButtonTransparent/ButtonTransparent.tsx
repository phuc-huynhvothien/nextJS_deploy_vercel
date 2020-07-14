import React from 'react';
import { StyledButtonTransparent } from './ButtonTransparent.styled'
interface ButtonProps {
    children: React.ReactChild
    onClick?(e: React.MouseEvent<HTMLElement>): void
    active: string
}
const ButtonTransparent: React.FC<ButtonProps> = (props) => {

    return <>
        <StyledButtonTransparent {...props.active ? "active" : "xx"}>{props.children}</StyledButtonTransparent>
    </>
}
export default ButtonTransparent;