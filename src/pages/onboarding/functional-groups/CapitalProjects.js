import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

import { Button, Img } from 'components/styled'
import PDFViewer from 'components/pdf-viewer'

import bgImg from 'images/onboarding/bg_bottomright.svg'
import PageStyle from '../PageStyle'
import pdf from 'assets/functional-groups/capitalprojects.pdf'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  right: 0;
  align-self: flex-end;
  z-index: 0;
`

export default class CapitalProjects extends Component {
  render() {
    return (
      <>
        <PageStyle>
          <h3>Capital Projects Group</h3>
          <h4>Text here</h4>
          <PDFViewer file={pdf} />
          <Link to="../corporate-services">
            <Button mt="15rem" textColor="black">
              Next >
            </Button>
          </Link>
        </PageStyle>
        <div>
          <BgImg src={bgImg} />
        </div>
      </>
    )
  }
}
