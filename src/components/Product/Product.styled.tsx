import styled from 'styled-components';
export const StyledProductBox = styled.div`
    margin-bottom: 50px;
    width : 195px;
    margin: 0 15px;
    &.product-box:hover .image-wrap img:nth-child(2){
        visibility: visible;
        opacity: 1;
    }
    &.product-box:hover .product-icons button{
        visibility: visible;
        opacity: 1;
    }
    &.product-box:hover .title h3 a{
        visibility: hidden;
        transform: translateY(-60%);
        opacity: 0;
    }
    &.product-box:hover .title>a{
        visibility: visible;
        transform: translateY(0);
        opacity: 1;
    }
    
`
export const StyledProductGridImage = styled.div`
    position: relative;
    a.image-wrap{
        display: block;
        img{
            width: 100%;
        }
        img:nth-child(2){
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            visibility: hidden;
            opacity: 0;
        }
        img:nth-child(1){
            z-index: 2;
            visibility: visible;
            opacity: 1;
        }
    }
`
export const StyledProductGridBadges = styled.div`
    position: absolute;
    z-index: 9;
    top: 20px;
    left: 20px;
    display: flex;
    flex-direction: column;
    span{
        &.onsale{
            background-color: #98d8ca;
        }
        &.hot{
            background-color: #c61932;
        }
        font-size: 14px;
        font-weight: 500;
        line-height: 48px;
        z-index: 3;
        display: inline-block;
        width: 48px;
        height: 48px;
        margin-bottom: 10px;
        text-align: center;
        text-transform: lowercase;
        color: #fff;
        border-radius: 100%;
    }
    
`

export const StyledProductGridIcons = styled.div`
    position: absolute;
    z-index: 9;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
`
// TODO**** : For hover to display icons for product
// &.product-box:hover .product-icons button{
//     visibility: visible;
//     opacity: 1;
// }

export const StyledProductGridIcon = styled.div`
    display: inline;
    button{
        line-height: 40px;
        display: inline-block;
        visibility: hidden;
        width: 40px;
        height: 40px;
        margin-bottom: 5px;
        padding: 0;
        text-align: center;
        opacity: 0;
        color: #7e7e7e;
        border: none;
        background: none;
        background-color: #fff;
    }
`
export const StyledProductGridContent = styled.div`
    position: relative;
    padding-top: 25px;
    div.title{
        position:relative;
        h3 a{
            font-size: 17px;
            font-weight: 400;
            line-height: 1.6;
            display: block;
            visibility: visible;
            margin-bottom: 10px;
            transition-duration: .6s;
            transform: translateY(0);
            opacity: 1;
            color: #333;
            text-decoration: none;
        }
        >a{
            font-size: 18px;
            font-weight: 500;
            line-height: 1.3;
            position: absolute;
            top: 0;
            left: 0;
            display: inline-block;
            visibility: hidden;
            transition-duration: .6s;
            transform: translateY(60%);
            opacity: 0;
            color: #d3122a;
            border: none;
            background: none;
            text-decoration: none;
        }
    }
    div.price{
        .main-price.discounted{
            font-size: 12px;
            font-weight: 600;
            line-height: 1;
            text-decoration: line-through;
            color: #aaa;
            padding-right:5px;
        }
        .discounted-price{
            font-size: 14px;
            font-weight: 600;
            line-height: 1;
            color: #333;
        }
    }
`

