import React from 'react';
import { IBanner } from '../../models/IBanner';
import { Button } from 'react-bootstrap';
import {
    StyleBannerLayout,
    StyleBannerContainer,
    StyleBannerTitle,
    StyleBannerUrl
} from '../Banner/Banner.styled'
const Banner: React.FC<IBanner> = (props) => {
    const url = "";
    return <>
        <StyleBannerLayout url={url}>
            <StyleBannerContainer>
                <div className="row">
                    <div className="col">
                        <StyleBannerTitle>Shop Left Sidebar</StyleBannerTitle>
                        <StyleBannerUrl>Home/Shop Left Sidebar </StyleBannerUrl>
                    </div>
                </div>
            </StyleBannerContainer>
        </StyleBannerLayout>
    </>
}
export default Banner; 
