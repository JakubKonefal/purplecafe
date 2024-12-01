import { isBrowser } from 'utils/isSSR'

export const scrollTo = (top: number, behavior: ScrollBehavior = 'smooth') => {
  if (isBrowser) {
    window.scrollTo({
      top,
      behavior,
    })
  }
}

export const scrollToElement = (
  element: Element | null,
  behavior: ScrollBehavior = 'smooth'
) => {
  if (isBrowser && element) {
    const navigation = document.getElementById('navigation')
    const elementPosition = (element as HTMLElement).offsetTop

    if (navigation) {
      const navigationOffset = navigation.offsetHeight
      const upOffsetPosition = elementPosition - navigationOffset - 10
      const bottomOffsetPosition = elementPosition - navigationOffset / 2
      const isScrollingUp = window.scrollY > elementPosition

      if (upOffsetPosition < 0) {
        element.scrollIntoView({ behavior })
      } else {
        scrollTo(
          isScrollingUp ? upOffsetPosition : bottomOffsetPosition,
          behavior
        )
      }
    } else {
      element.scrollIntoView({ behavior })
    }
    return true
  }
  return false
}

export const scrollToNextSibling = (parent: string) => {
  const origin = document.querySelector(parent)
  if (origin) {
    const sibling = origin.nextSibling
    if (sibling) {
      return scrollToElement(sibling as Element)
    }
  }
  return false
}

export const scrollTop = () => {
  if (isBrowser) {
    const topElement = document.querySelector('body')
    return scrollToElement(topElement)
  }
  return false
}

export const scrollToSection = (
  selector: string,
  behavior: ScrollBehavior = 'smooth',
  forceIntoView: boolean = false
) => {
  if (isBrowser) {
    const element = document.querySelector(selector)
    if (forceIntoView && element) {
      element.scrollIntoView({ behavior })
      return true
    }
    return scrollToElement(element, behavior)
  }
  return false
}

export const scrollToSectionTop = (
  selector: string
  // lenis?: Lenis
) => {
  if (isBrowser) {
    const element = document.querySelector(selector)

    if (element) {
      const { top } = element.getBoundingClientRect()
      if (top < 0) {
        return scrollToElement(element)
      }
    }
  }
  return false
}
