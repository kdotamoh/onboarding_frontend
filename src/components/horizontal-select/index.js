import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Select = styled.div`
  display: flex;

  div:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-left: solid 0.5px #e6e6e6;
  }

  div {
    border: solid 0.5px #e6e6e6;
    border-left: none;
  }

  div:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`

const Option = styled.div`
  color: ${props =>
    props['aria-selected'] === true ? 'rgba(0, 0, 0, 0.65)' : '#999999'};
  background: white;
  padding: 0.4rem 2rem;
  display: inline-block;
  cursor: pointer;
`

export default class HorizontalSelect extends Component {
  state = {
    options: []
  }

  componentDidMount() {
    this.setState({ options: this.props.options })
  }

  componentDidUpdate() {
    this.onChange()
  }

  toggleSelected = id => {
    let newOptions = this.state.options.map((option, optionId) => {
      if (id !== optionId) return { ...option, selected: false }
      return { ...option, selected: !option.selected }
    })
    this.setState({ options: newOptions })
  }

  onChange = () => {
    console.log(
      this.state.options
        ? this.state.options.find(option => option.selected)
        : null
    )
  }

  render() {
    // const { options } = this.props
    const { options } = this.state

    return (
      <Select role="listbox" id="listbox1" onChange={console.log()}>
        {options &&
          options.map((option, id) => (
            // Todo: Get id from spread props
            <Option
              role="option"
              id={`listbox1-${id + 1}`}
              key={id}
              aria-selected={option.selected}
              onClick={() => this.toggleSelected(id)}
            >
              {option.text}
            </Option>
          ))}
        {/* <Option role="option" id="listbox1-1" aria-selected="true">
          Green
        </Option>
        <Option role="option" id="listbox1-2">
          Orange
        </Option> */}
      </Select>
    )
  }
}

HorizontalSelect.propTypes = {
  options: PropTypes.array
}
