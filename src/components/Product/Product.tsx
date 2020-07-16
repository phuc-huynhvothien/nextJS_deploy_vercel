import React from 'react';
import {
    StyledProductBox, StyledProductGridBadges,
    StyledProductGridIcons, StyledProductGridImage,
    StyledProductGridIcon, StyledProductGridContent
} from './Product.styled'
import { FiHeart, FiSearch } from "react-icons/fi";
import { BsFillReplyAllFill } from "react-icons/bs";
import { IProduct } from '../../models/IProduct'
const Product: React.FC<IProduct> = (props) => {
    return <>
        <StyledProductBox className="product-box">
            <div className="product-grid">
                <StyledProductGridImage>
                    <a className="image-wrap" href="/shop/product-basic/lorem-ipsum-decor-one">
                        <img src={props.urlImage} className="img-fluid" alt="Lorem ipsum decor one" />
                        <img src={props.urlImageHover} className="img-fluid" alt="Lorem ipsum decor one" />
                    </a>
                    <StyledProductGridBadges>
                        {props.discountPercent != null ? <span className="onsale">{props.discountPercent}</span> : ""}
                        {props.isNew ? <span className="hot">New</span> : ""}
                    </StyledProductGridBadges>
                    <StyledProductGridIcons className="product-icons">
                        <StyledProductGridIcon>
                            <button><FiHeart fontSize={20} /></button>
                        </StyledProductGridIcon>
                        <StyledProductGridIcon>
                            <button><BsFillReplyAllFill fontSize={20} /></button>
                        </StyledProductGridIcon>
                        <StyledProductGridIcon>
                            <button><FiSearch fontSize={20} /></button>
                        </StyledProductGridIcon>
                    </StyledProductGridIcons>
                </StyledProductGridImage>
                <StyledProductGridContent>
                    <div className="title">
                        <h3>
                            <a href="#">{props.name}</a>
                        </h3>
                        <a href="#">Select Option</a>
                    </div>
                    <div className="price">
                        <span className="main-price discounted">${props.price}</span>
                        <span className="discounted-price">{props.priceDiscount? "$"+props.priceDiscount :""}</span>
                    </div>
                </StyledProductGridContent>

            </div>
        </StyledProductBox>

    </>
}
export default Product;