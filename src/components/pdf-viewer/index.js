import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

class PDFViewer extends Component {
  state = { numPages: null, pageNumber: 1, height: null, width: null }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }

  onPageLoadSuccess = ({ height, width }) => {
    this.setState({ height, width })
  }

  goToPrevPage = event => {
    event.preventDefault()
    if (this.state.pageNumber > 1) {
      this.setState(state => ({ pageNumber: state.pageNumber - 1 }))
    }
  }
  goToNextPage = event => {
    event.preventDefault()
    if (this.state.pageNumber < this.state.numPages) {
      this.setState(state => ({ pageNumber: state.pageNumber + 1 }))
    }
  }

  render() {
    const { pageNumber, numPages } = this.state
    const { file } = this.props

    return (
      <div>
        <div style={{ width: 800 }}>
          <Document
            file={file}
            onLoadSuccess={this.onDocumentLoadSuccess}
            onLoadError={console.error}
          >
            <Page
              pageNumber={pageNumber}
              width={800}
              height={this.state.height}
            />
          </Document>
        </div>
        <p>
          Page {pageNumber} of {numPages}
        </p>
        <div>
          <button onClick={this.goToPrevPage}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>
        </div>
      </div>
    )
  }
}
PDFViewer.propTypes = {
  file: PropTypes.any
}

export default PDFViewer
