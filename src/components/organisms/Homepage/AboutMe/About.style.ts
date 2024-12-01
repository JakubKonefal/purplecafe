import styled from 'styled-components'

import { Container } from 'components/atoms/Container'
import { Flex } from 'components/atoms/Spacing'
import { Body16, Body18, Body20, Text } from 'components/atoms/Typography'

import media from 'styles/media'

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px 0;
  background-color: ${({ theme }) => theme.colors.white100};

  ${media.xl.min} {
    padding: 80px 0;
  }
`

export const StyledFlex = styled(Flex)`
  margin-bottom: 20px;
  ${media.md.min} {
    margin-bottom: 40px;
  }
`

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 220px;
  border-radius: 50%;
  margin-bottom: 20px;

  overflow: hidden;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 99%;
    height: 99%;
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.colors.white};
  }

  ${media.md.min} {
    margin-bottom: 40px;
  }
`

export const StyledContent = styled(Text)`
  ${media.xl.max} {
    br:not(:first-of-type()) {
      display: none;
    }
  }

  ${media.xl.min} {
    font-size: 15px;
  }

  strong {
    font-size: 15px;

    ${media.md.min} {
      font-size: 16px;
    }
  }
`
