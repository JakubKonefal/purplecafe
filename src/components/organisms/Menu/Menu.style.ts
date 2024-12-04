import styled, { css } from 'styled-components'

import media from 'styles/media'

export const Wrapper = styled.div<{ $active: boolean }>`
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;

  background: #fffffd;

  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  border-top: 1px solid ${({ theme }) => theme.colors.brown};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  padding: 40px 16px;

  ${({ $active }) =>
    $active &&
    css`
      opacity: 1;
      visibility: visible;
    `}

  ${media.xl.min} {
    display: none;
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-bottom: 64px;
`

export const LinkItem = styled.button`
  display: flex;
  align-items: center;
`
