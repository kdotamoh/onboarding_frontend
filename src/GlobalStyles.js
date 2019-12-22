import { createGlobalStyle } from 'styled-components'

import fonts from './fonts/fonts'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: MTNBrighterSans-Regular;
  }

  html {
    font-size: 62.5%;
    height: 100vh;
  }

  body {
    // font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    //   "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    //   sans-serif;
    font-family: MTNBrighterSans-Regular;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    font-size: 1.6rem;
    line-height: 1.5;
    min-height: 100vh;
  }

  ${fonts}

  // #root {
    //   height: 100vh;
    // }

    // .App {
    //   min-height: 100vh;
    // }
`
