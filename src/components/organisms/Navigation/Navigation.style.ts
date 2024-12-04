import styled, { css } from 'styled-components'

import { Container } from 'components/atoms/Container'
import { Text } from 'components/atoms/Typography'

import media from 'styles/media'
import { elementsSize } from 'styles/theme'

export const Wrapper = styled.div<{ $active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.white};
  height: ${elementsSize.navbar.mobile};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  transition: 0.6s;
  transform: ${({ $active }) =>
    $active ? `translate3d(0, 0, 0)` : 'translate3d(0, -101%, 0)'};

  ${media.lg.min} {
    height: ${elementsSize.navbar.desktop};
  }
`

export const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;

  ${media.lg.min} {
    width: 100%;
    justify-content: space-between;
  }
`

export const MenuButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 4px;

  ${Text} {
    cursor: pointer;
  }

  ${media.lg.min} {
    display: none;
  }
`

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 2px;
  background-color: ${({ theme }) => theme.colors.white};

  ${media.lg.min} {
    width: 48px;
    height: 48px;
    padding: 12px;

    &.menu {
      display: none;
    }
  }
`

export const StyledIcon = styled.img`
  width: 100%;
`

export const LinksWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 4px;
  background-color: ${({ theme }) => theme.colors.white};

  ${media.xl.max} {
    display: none;
  }
`

export const LinkItem = styled.button`
  padding: 6px 12px;
  transition: color 0.3s;

  p {
    transition: color 0.3s;
  }

  &:hover {
    p {
      color: ${({ theme }) => theme.colors.primaryDark};
    }
  }
`
