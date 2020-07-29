import React from 'react'
import { Text } from '../ui-kits/Text'
import {
  StyledHeader,
  StyledHeaderMenu,
  StyledHeaderLogo,
  StyledHeaderButton,
  StyledHeaderMenuItem,
} from './Header.styled'
import { IoMdCart } from 'react-icons/io'
import Router from 'next/router'
interface IHeader {
  cartCount?: number
}
const Header: React.FC<IHeader> = (props) => {
  return (
    <StyledHeader>
      <StyledHeaderLogo>LOGO</StyledHeaderLogo>
      <StyledHeaderMenu>
        <StyledHeaderMenuItem>
          <Text>Home</Text>
        </StyledHeaderMenuItem>
        <StyledHeaderMenuItem>
          <Text>Products</Text>
        </StyledHeaderMenuItem>
      </StyledHeaderMenu>
      <div className="leftHeader">
        <div className="cartHolder">
          <IoMdCart fontSize={20} />
          {props.cartCount > 0 && <div className="bagde">{props.cartCount}</div>}
        </div>
        {/* <StyledHeaderButton>Login</StyledHeaderButton> */}
            <button style={{marginRight : "10px;"}} onClick={() =>  Router.push('/signup')}>Sign Up!</button>
                <button onClick={() =>  Router.push('/signin')}>Sign In!</button>
      </div>
    </StyledHeader>
  )
}

export default Header
