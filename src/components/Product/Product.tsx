import React from 'react';
import { StyledProductBox, StyledProductGridBadges, StyledProductGridIcons, StyledProductGridImage } from './Product.styled'
const Product = (props) => {
    return <>
        <StyledProductBox>
            <div className="product-grid">
                <StyledProductGridImage>
                    <a className="image-wrap" href="/shop/product-basic/lorem-ipsum-decor-one">
                        <img src="http://lezada-next.themesmummy.com/assets/images/product/decor/1.jpg" className="img-fluid" alt="Lorem ipsum decor one" />
                        <img src="http://lezada-next.themesmummy.com/assets/images/product/decor/2.jpg" className="img-fluid" alt="Lorem ipsum decor one" />
                    </a>
                    <StyledProductGridBadges>
                        <span className="onsale">-10%</span><span className="hot">New</span>
                    </StyledProductGridBadges>
                    <StyledProductGridIcons>

                    </StyledProductGridIcons>
                </StyledProductGridImage>
            </div>
        </StyledProductBox>

    </>
}
export default Product;