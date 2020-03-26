import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from '@reach/router'

import { Button, Img } from 'components/styled'
import PDFViewer from 'components/pdf-viewer'

import bgImg from 'images/onboarding/bg_bottomright.svg'
import PageStyle from '../PageStyle'

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  right: 0;
  align-self: flex-end;
  z-index: 0;
`

export default class CorporateServices extends Component {
  render() {
    let { title } = this.props.page ? this.props.page : {}
    let { header } = this.props.page ? this.props.page : {}
    let { content } = this.props.page ? this.props.page : {}
    let { pdf_file } = this.props.page ? this.props.page : {}
    return (
      <>
        <PageStyle>
          <h3>{title ? title : null}</h3>
          <h4>{header ? header : null}</h4>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
          <PDFViewer file={pdf_file} />
          <Link to="../customer-relations">
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
CorporateServices.propTypes = {
  page: PropTypes.object
}
