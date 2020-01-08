import styled from 'styled-components'
import { space } from 'styled-system'

export const Card = styled.div`
  ${space}

  display: flex;
  flex-direction: column;

  min-height: 350px;
  min-width: 350px;
  width: 350px;
  background: white;
  z-index: 500;
  box-shadow: 0 4px 2.5px 0 rgba(0, 0, 0, 0.25);

  hr {
    border-top: 1px solid #e6e6e6;
  }
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  height: 50%;
  min-height: 175px;

  .card-info__image {
    height: 8.5rem;
    width: 8.5rem;
    border-radius: 100%;
  }

  .card-info__circle {
    background: #0d5d77;
  }

  .card-info__left {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .card-info__right {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .card-info__details {
      display: flex;
      flex-direction: column;

      h5 {
        font-weight: bold;
        margin-bottom: 0.5rem;
      }

      span {
        font-size: 65%;
        margin-bottom: -0.2rem;
      }
    }
  }
`

export const DashboardCard = styled(Card)`
  img {
    margin-bottom: 3rem;
  }
  box-shadow: unset;
  min-height: unset;
  height: 300px;
  text-align: center;
`
