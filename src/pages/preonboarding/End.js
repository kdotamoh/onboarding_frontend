import React, { Component } from 'react'
import styled from 'styled-components'
import { navigate } from '@reach/router'
import { connect } from 'react-redux'
import axios from 'axios'
import moment from 'moment'
import PropTypes from 'prop-types'

import { COLORS } from '../../constants'
import { Img } from 'components/styled'
import { H1, P, Logo } from 'components/styled'
import { Card, CardInfo } from 'components/card'

import bgImg from 'images/bg_l_bottomleft.svg'
import account from 'images/user-profile/account.jpg'
import logo from 'images/mtn_logo.svg'

const HeroH1 = styled(H1)`
  color: ${COLORS.DARKER_GREYISH_BROWN};
  z-index: 1000;
`

const BgImg = styled(Img)`
  position: absolute;
  bottom: 0;
  left: 0;
  align-self: flex-end;

  @media (max-width: 768px) {
    width: 20rem;
    height: auto;
  }
`

const Paragraph = styled(P)`
  position: relative;
  margin-bottom: 2.5rem;
  line-height: 1.8;

  z-index: 5;
`

const Layout = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
  }

  .section {
    padding: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    div {
      width: 100%;
      height: 100%;
    }
  }
`

const Content = styled.div`
  position: relative;
  transform: translateX(15rem);
  z-index: 5;

  @media (max-width: 768px) {
    transform: unset;
    margin-top: 10rem;
  }
`

class End extends Component {
  state = {
    hr_partner_details: {}
  }
  async componentDidMount() {
    let { hr_partner } = this.props.user
    let { data: hr_partner_details } = await axios({
      method: 'get',
      url: `${process.env.REACT_APP_API_BASE}/hr_partners/${
        hr_partner.id ? hr_partner.id : null
      }/`,
      headers: {
        Authorization: `JWT ${this.props.token}`
      }
    })
    // console.log(hr_partner_details)
    this.setState({ hr_partner_details })
  }
  nextPage = () => {
    navigate('/preonboarding/info')
  }

  render() {
    const { user } = this.props
    const { first_name } = this.props.user
    const { hr_partner_details } = this.state
    return (
      <Layout>
        <Logo maxWidth="6rem" left="8rem" top="1rem" src={logo} alt="" />
        <div className="section" style={{ backgroundColor: COLORS.MARIGOLD }}>
          <Content>
            <HeroH1>
              Congrats on completing your pre-onboarding, {first_name}.
            </HeroH1>
            <Paragraph>We look forward to seeing you soon.</Paragraph>
          </Content>
          <BgImg src={bgImg} />
        </div>
        <div className="section" style={{ backgroundColor: COLORS.MARIGOLD }}>
          <Card p="2rem">
            <CardInfo>
              <div className="card-info__left">
                <div className="card-info__image card-info__circle">
                  <span className="month">
                    {' '}
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
        </div>
      </Layout>
    )
  }
}
End.propTypes = {
  token: PropTypes.string,
  user: PropTypes.shape({
    first_day: PropTypes.string,
    first_day_reporting_time: PropTypes.string,
    first_day_location: PropTypes.string,
    hr_partner: PropTypes.number,
    first_name: PropTypes.string
  })
}
export default connect(state => ({
  user: state.user,
  token: state.token
}))(End)
