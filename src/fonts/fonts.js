// import { createGlobalStyle } from 'styled-components'

import MTNBrighterSansLight from './MTNBrighterSans-Light.woff2'
import MTNBrighterSansRegular from './MTNBrighterSans-Regular.woff2'
import MTNBrighterSansMedium from './MTNBrighterSans-Medium.woff2'
import MTNBrighterSansBold from './MTNBrighterSans-Bold.woff2'

export default `
  @font-face {
    font-family: MTNBrighterSans-Light;
    src: local(MTNBrighterSans-Light),
      url(${MTNBrighterSansLight}) format('woff2');
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: MTNBrighterSans-Regular;
    src: local(MTNBrighterSans-Regular),
      url(${MTNBrighterSansRegular}) format('woff2');
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: MTNBrighterSans-Medium;
    src: local(MTNBrighterSans-Medium),
      url(${MTNBrighterSansMedium}) format('woff2');
    font-weight: medium;
    font-style: normal;
    font-stretch: normal;
  }

  @font-face {
    font-family: MTNBrighterSans-Bold;
    src: local(MTNBrighterSans-Bold),
      url(${MTNBrighterSansBold}) format('woff2');
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
  }
`
