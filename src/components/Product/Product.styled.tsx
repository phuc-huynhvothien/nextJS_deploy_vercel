import styled from 'styled-components';
export const StyledProductBox = styled.div`
    margin-bottom: 50px;
    padding-right: 15px;
    padding-left: 15px;
`
export const StyledProductGridImage = styled.div`
    position: relative;
    a{
        display: block;
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
