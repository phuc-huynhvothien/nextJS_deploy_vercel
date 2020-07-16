import React from 'react';
import {
    StyledProductBox, StyledProductGridBadges,StyledSpanHot,StyledSpanOnSale,
    StyledProductGridIcons,StyledTitleBox,StyledTitlePrice,StyledDiscountPrice,StyledSpanPrice,
    StyledProductGridIcon, StyledProductGridContent,
    StyledProductGridImageTag, StyledProductGridImageUpdated, StyledTagA
} from './Product.styled'
import { FiHeart, FiSearch } from "react-icons/fi";
import { BsFillReplyAllFill } from "react-icons/bs";
import { IProduct } from '../../models/IProduct'
const Product: React.FC<IProduct> = (props) => {
    return <>
        <StyledProductBox>
            <div className="product-grid">
                <StyledProductGridImageUpdated>
                    <StyledTagA>
                        <StyledProductGridImageTag src={props.urlImage}></StyledProductGridImageTag>
                        <StyledProductGridImageTag src={props.urlImageHover}></StyledProductGridImageTag>
                    </StyledTagA>
                    <StyledProductGridBadges>
                        {props.discountPercent != null ? <StyledSpanOnSale>{props.discountPercent}</StyledSpanOnSale> : ""}
                        {props.isNew ? <StyledSpanHot/> : ""}
                    </StyledProductGridBadges>
                    <StyledProductGridIcons>
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
                </StyledProductGridImageUpdated>


                <StyledProductGridContent>
                    <StyledTitleBox>
                        <h3>
                            <a href="#">{props.name}</a>
                        </h3>
                        <a href="#">Select Option</a>
                    </StyledTitleBox>
                    <StyledTitlePrice>
                        <StyledSpanPrice>${props.price}</StyledSpanPrice>
                        <StyledDiscountPrice>{props.priceDiscount ? "$" + props.priceDiscount : ""}</StyledDiscountPrice>
                    </StyledTitlePrice>
                </StyledProductGridContent>

            </div>
        </StyledProductBox>

    </>
}
export default Product;