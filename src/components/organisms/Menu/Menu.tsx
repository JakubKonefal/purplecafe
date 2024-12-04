import React, { useRef } from 'react'

import { Body16, Text } from 'components/atoms/Typography'

import { MENU_LINKS } from 'constants/menuLinks'

import { scrollToSection } from 'utils/scrollTo'

import { LinkItem, LinksWrapper, Wrapper } from './Menu.style'

type MenuProps = {
  isOpen: boolean
  closeMenu: () => void
}

export const Menu: React.FC<MenuProps> = ({ isOpen, closeMenu }) => {
  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <Wrapper $active={isOpen} ref={ref}>
      <LinksWrapper>
        {MENU_LINKS.map(({ label, scrollLink }, index) => (
          <LinkItem
            key={`mobile-nav-menu-item-${index + 1}`}
            type="button"
            onClick={() => {
              scrollToSection(scrollLink)
              closeMenu()
            }}
          >
            <Text $base={Body16} $color="white">
              {label}
            </Text>
          </LinkItem>
        ))}
      </LinksWrapper>
    </Wrapper>
  )
}
