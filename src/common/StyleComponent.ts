import styled from 'styled-components';
export const Container = styled.div`
  padding-left : 15px;
  padding-right: 15px;
  width : 100%;
  margin : 0 auto;
  max-width : 1200px;
`
export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    &.align-items-center{
        align-items: center!important;
        margin : 0 auto;
    }
`

export const BodyContent = styled.div`
margin-bottom: 130px;
margin-top: 130px;
`
export const LeftSide = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
`

export const RightSide = styled.div`
  flex: 0 0 75%;
  max-width: 75%;
`