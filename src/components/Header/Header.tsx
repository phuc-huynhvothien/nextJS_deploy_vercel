import React from 'react'
import { Text } from '../ui-kits/Text'
import {
  StyledHeader,
  StyledHeaderContent,
  StyledHeaderLogo,
  StyledHeaderContentNav,
  StyledHeaderIcon,
  StyleHeaderContainer,
} from './Header.styled'
import { IoMdCart } from 'react-icons/io'
import { FiHeart, FiSearch } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
interface IHeader {
  cartCount?: number
}

const Header: React.FC<IHeader> = (props) => {
  const logo = "http://lezada-next.themesmummy.com/assets/images/logo.png";  
  return (
    <StyledHeader>
      <StyleHeaderContainer>
        <StyledHeaderContent>
          <StyledHeaderLogo>
            <a >
              <img src={logo} alt={logo} className="img-fluid"></img>
            </a>
          </StyledHeaderLogo>
          <StyledHeaderContentNav>
              <ul>
              <li><a>Home</a></li>
              <li><a>Shop</a></li>
              <li><a>Element</a></li>
              </ul>
          </StyledHeaderContentNav>
          <StyledHeaderIcon>
            <ul className="d-none d-lg-block">
              <li>
                <FiSearch fontSize={20} />
              </li>
              <li>
                <FaUserAlt fontSize={20} />
              </li>
              <li>
              <FiHeart fontSize={20} />
              </li>
              <li>
              <IoMdCart fontSize={20} />
              </li>
            </ul>
          </StyledHeaderIcon>
        </StyledHeaderContent>

      </StyleHeaderContainer>

      {/* <StyledHeaderMenu>
        <StyledHeaderMenuItem>
          <Text>Home</Text>
        </StyledHeaderMenuItem>
        <StyledHeaderMenuItem>
          <Text>Products</Text>
        </StyledHeaderMenuItem>
      </StyledHeaderMenu> */}
      {/* <div >
        <FiSearch fontSize={20} />
        <FaUserAlt fontSize={20} />
        <FiHeart fontSize={20} />
        <IoMdCart fontSize={20} />
        <div className="cartHolder">
          {props.cartCount > 0 && <div className="bagde">{props.cartCount}</div>}
        </div>
      </div> */}
    </StyledHeader>
  )
}

export default Header
