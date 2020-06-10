import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'
import moment from 'moment'
import { navigate } from '@reach/router'

import { Card, CardInfo } from 'components/card'
import { SmallNav, StepNav } from 'components/navigation'
import { Button, H3, Container } from 'components/styled'

import { COLORS } from '../../constants'
import bgImg from 'images/bg_l_bottomright.svg'
import account from 'images/user-profile/account.jpg'

const ContainerWithBackground = styled(Container)`
  justify-content: center;
  background: ${COLORS.PALE_MARIGOLD};
`

const BgImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`

const Header = styled(H3)`
  color: ${COLORS.TWILIGHT_BLUE};
`

class Info extends Component {
  state = {
    hr_partner_details: {}
  }
  async componentDidMount() {
    let { hr_partner } = this.props.user
    if (hr_partner) {
      let { data: hr_partner_details } = await axios({
        method: 'get',
        url: `${process.env.REACT_APP_API_BASE}/hr_partners/${hr_partner.id}/`,
        headers: {
          Authorization: `JWT ${this.props.token}`
        }
      })
      // console.log(hr_partner_details)
      this.setState({ hr_partner_details })
    }
  }

  render() {
    const { user } = this.props
    const { hr_partner_details } = this.state
    return (
      <div>
        <div style={{ background: `${COLORS.PALE_MARIGOLD}` }}>
          <SmallNav />
          <StepNav />
        </div>
        <ContainerWithBackground>
          <Header>Where &amp; When</Header>
          <Card mt="2rem" mb="3rem" p="2rem">
            <CardInfo>
              <div className="card-info__left">
                <div className="card-info__image card-info__circle">
                  <span className="month">
                    {user.first_day
                      ? moment(user.first_day)
                          .format('MMM')
                          .toUpperCase()
                      : null}
                  </span>
                  <span className="day">
                    {user.first_day
                      ? moment(user.first_day)
                          .format('DD')
                          .toUpperCase()
                      : null}
                  </span>
                </div>
              </div>

              <div className="card-info__right">
                <div className="card-info__details">
                  <h5>Your First Day</h5>
                  {user.first_day && (
                    <span>
                      {moment(user.first_day).format('MMM DD YYYY')} |{' '}
                      {moment(user.first_day_reporting_time, 'HH:mm:ss').format(
                        'hh:mm A'
                      )}
                    </span>
                  )}
                  <span>{user.first_day_location}</span>
                  {/* <span>MTN House, #6 Independence Avenue,</span>
                  <span>West Ridge, Accra</span>
                  <span>GA-052-4025</span> */}
                </div>
              </div>
            </CardInfo>

            <hr />

            <CardInfo>
              <div className="card-info__left">
                <img
                  className="card-info__image"
                  src={
                    hr_partner_details.avatar
                      ? hr_partner_details.avatar
                      : account
                  }
                  alt=""
                />
              </div>
              <div className="card-info__right">
                <div className="card-info__details">
                  <h5>Your HR Business Partner</h5>
                  <span>
                    {hr_partner_details.first_name}{' '}
                    {hr_partner_details.last_name}
                  </span>
                  <span>{hr_partner_details.phone_number} </span>
                  <span>{hr_partner_details.email}</span>
                </div>
              </div>
            </CardInfo>
          </Card>
          <Button
            onClick={() => navigate('/preonboarding/company-overview')}
            color="blue"
            fontSize={1.6}
            p="4rem"
          >
            Next Step >
          </Button>
          <BgImg src={bgImg} />
        </ContainerWithBackground>
      </div>
    )
  }
}
Info.propTypes = {
  token: PropTypes.string,
  user: PropTypes.shape({
    first_day: PropTypes.string,
    first_day_reporting_time: PropTypes.string,
    first_day_location: PropTypes.string,
    hr_partner: PropTypes.object
  })
}

export default connect(state => ({
  token: state.token,
  user: state.user
}))(Info)
