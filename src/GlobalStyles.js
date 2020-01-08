import { createGlobalStyle } from 'styled-components'

import fonts from './fonts/fonts'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /* font-family: MTNBrighterSans-Regular; */
  }

  html {
    font-size: 62.5%;
    height: 100vh;
  }

  h1, h2, h3, h4 {
    font-family: MTNBrighterSans-Bold;
  }

  body {
    // font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    //   "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    //   sans-serif;
    color: #3d3d3d;
    font-family: MTNBrighterSans-Light;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    font-size: 1.6rem;
    line-height: 1.5;
    min-height: 100vh;
  }


  a {
    color: rgba(0, 0, 0, 0.65)
  }

  ${fonts}

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    text-align: center;
  }

  .is-current {
    color: red;
  }


  // #root {
    //   height: 100vh;
    // }

    // .App {
    //   min-height: 100vh;
    // }
`
