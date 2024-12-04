import React, { useEffect, useState } from 'react'

import {
  Body16,
  HeadingLobsterVerySmall,
  Text,
} from 'components/atoms/Typography'

import { Menu } from 'components/organisms/Menu'

import { MENU_LINKS } from 'constants/menuLinks'

import useScrollHide from 'hooks/useScrollHide'

import { scrollToSection, scrollTop } from 'utils/scrollTo'

import closeIcon from 'assets/icons/close.svg'
import menuIcon from 'assets/icons/menu.svg'

import {
  LinkItem,
  LinksWrapper,
  MenuButton,
  MenuButtonsWrapper,
  StyledContainer,
  StyledIcon,
  Wrapper,
} from './Navigation.style'

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isHidden = useScrollHide(0, 150)

  useEffect(() => {
    const htmlElement = document.querySelector('html')!

    if (isMenuOpen) {
      htmlElement.style.overflow = 'hidden'
    } else {
      htmlElement.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  return (
    <Wrapper $active={!isHidden || isMenuOpen}>
      <StyledContainer>
        <MenuButtonsWrapper>
          <Text
            $color="heading"
            $base={HeadingLobsterVerySmall}
            onClick={() => {
              scrollTop()
            }}
          >
            Purple Cafe English
          </Text>
          <MenuButton
            className="menu"
            onClick={() => {
              if (isMenuOpen) {
                setIsMenuOpen(false)
              } else {
                setIsMenuOpen(true)
              }
            }}
            type="button"
            aria-label={isMenuOpen ? 'zamknij' : 'menu'}
          >
            <StyledIcon
              src={isMenuOpen ? closeIcon : menuIcon}
              alt={isMenuOpen ? 'Zamknij' : 'Menu'}
            />
          </MenuButton>
        </MenuButtonsWrapper>
        <LinksWrapper>
          {MENU_LINKS.map(({ label, scrollLink }, index) => (
            <LinkItem
              key={`menu-item-${index + 1}`}
              type="button"
              onClick={() => scrollToSection(scrollLink)}
            >
              <Text $base={Body16} color="gray">
                {label}
              </Text>
            </LinkItem>
          ))}
        </LinksWrapper>

        <Menu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
      </StyledContainer>
    </Wrapper>
  )
}
