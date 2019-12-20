import React, { Component } from 'react'
import LoginForm from './LoginForm'

import {
    SplitGrid,
    SplitGridLeftColumn,
    SplitGridRightColumn,
    CenterContent
} from 'views/layout'

export default class PreOnboardingLogin extends Component {
    render() {
        return (
            <SplitGrid>
                <SplitGridLeftColumn>
                    <CenterContent>
                        <p>I got some text</p>
                    </CenterContent>
                </SplitGridLeftColumn>
                <SplitGridRightColumn>
                    <CenterContent>
                        <LoginForm />
                    </CenterContent>
                </SplitGridRightColumn>
            </SplitGrid>
        )
    }
}
