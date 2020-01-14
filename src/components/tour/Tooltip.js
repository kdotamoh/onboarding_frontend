import React, { Component } from 'react'
import Joyride from 'react-joyride'
import styled from 'styled-system'

import { Button as B } from 'components/styled'

const Button = styled(B)``

const TooltipBody = styled.div``

const TooltipTitle = styled.p``

const TooltipContent = styled.p``

const TooltipFooter = styled.div``

const FormattedMessage = styled.span``

const CustomTooltip = ({
  /* eslint-disable */
  continuous,
  index,
  step,
  backProps,
  closeProps,
  primaryProps,
  tooltipProps
}) => (
  <TooltipBody {...tooltipProps}>
    {step.title && <TooltipTitle>{step.title}</TooltipTitle>}
    <TooltipContent>{step.content}</TooltipContent>
    <TooltipFooter>
      {index > 0 && (
        <Button {...backProps}>
          <FormattedMessage id="back" />
        </Button>
      )}
      {continuous && (
        <Button {...primaryProps}>
          <FormattedMessage id="next" />
        </Button>
      )}
      {!continuous && (
        <Button {...closeProps}>
          <FormattedMessage id="close" />
        </Button>
      )}
    </TooltipFooter>
  </TooltipBody>
)

export default class Tooltip extends Component {
  render() {
    return (
      <div>
        <Joyride tooltipComponent={CustomTooltip} />
      </div>
    )
  }
}
