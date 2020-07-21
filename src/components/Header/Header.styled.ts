import styled from 'styled-components'
const darkCharcoal = "#333"

export const StyledHeader = styled.header`
  position: relative
  .topbar-shadow:before{
    position: absolute;
    top: -3px;
    left: 0;
    width: 100%;
    height: 3px;
    content: "";
    box-shadow: 0 2px 5px rgba(0,0,0,.2)
  }
  .transparent-style {
    position: absolute;
    z-index: 9;
    top: 0;
    left: 0;
    width: 100%
  }
  .white-content .header-content__logo .dark-logo {
      display: none
  }
  .white-content .header-content__logo .white-logo {
    display: block
  }
  .white-content .header-content__logo button,header.white-content .header-content__navigation>ul>li>a {
    color: ${props => props.theme.colors.primary}
  }
  .white-content .header-content__navigation>ul>li>a:after,header.white-content .header-content__navigation>ul>li>a:hover:after {
    background-color: ${props => props.theme.colors.primary}
  }
  .white-content .header-content__icons>ul>li>a>svg,header.white-content .header-content__icons>ul>li>button>svg,header.white-content .header-content__navigation>ul>li:hover>svg,header.white-content .header-content__navigation>ul>li>svg {
    fill:  ${props => props.theme.colors.primary}
  }
  .is-sticky {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    transition: all .3s;
    -webkit-animation: fadeInDown .7s ease-in-out 0s 1 normal none running;
    animation: fadeInDown .7s ease-in-out 0s 1 normal none running;
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 0 2px 5px rgba(0,0,0,.2)
  }
  .is-sticky.topbar-shadow:before {
    box-shadow: none
  }
  .is-sticky.white-content .header-content__logo .dark-logo {
    display: block
  }
  .is-sticky.white-content .header-content__logo .white-logo {
    display: none
  }
  .is-sticky.white-content .header-content__logo button,header.is-sticky.white-content .header-content__navigation>ul>li>a {
    color: ${darkCharcoal}
  }
  .is-sticky.white-content .header-content__navigation>ul>li>a:hover:after {
    background-color: ${darkCharcoal}
  }
  .is-sticky.white-content .header-content__icons>ul>li>a>svg,header.is-sticky.white-content .header-content__icons>ul>li>button>svg,header.is-sticky.white-content .header-content__navigation>ul>li:hover>svg,header.is-sticky.white-content .header-content__navigation>ul>li>svg {
    fill: ${darkCharcoal}
  }
  .is-sticky .header-top-area {
    display: none!important
  }
  .is-sticky .multilevel-header {
    padding-top: 0
  }
`
export const StyleHeaderContainer = styled.div`
  padding-left : 15px;
  padding-right: 15px;
  width : 95%;
  margin: 0 auto;
`
export const StyledHeaderContent = styled.div`
  position: relative!important;
  align-items: center!important;
  justify-content: space-between !important;
  display: flex!important;
`
export const StyledHeaderLogo = styled.div`
  align-items: center!important;
  display: flex!important;
  padding-right: 15px;
`

export const StyledHeaderContentNav = styled.nav`
  padding-left: 15px;
  padding-right: 15px;
  >ul>li{
    display: inline-block;
    margin-right: 30px;
    line-height: 80px;
  }
`
export const StyledHeaderIcon = styled.div`
padding-left: 15px;
ul{
  display: block!important;
  li{
    display: inline-block;
    margin-right: 30px;
  }
}
`