import styled, { css } from 'styled-components'

import { Transienty } from 'utils/types'

type NormalImageProps = Transienty<{
  objectFit?: React.CSSProperties['objectFit']
  objectPosition?: React.CSSProperties['objectPosition']
  radius?: React.CSSProperties['borderRadius']
}>

type NormalImageWrapperProps = Transienty<{
  width?: number
  height?: number
  objectFit?: React.CSSProperties['objectFit']
  radius?: React.CSSProperties['borderRadius']
}>

export const ImageInner = styled.img<NormalImageProps>`
  max-width: 100%;
  display: block;
  margin: 0;
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  height: ${(props) => (props.height ? `${props.height}px` : '100%')};
  object-fit: ${(props) => props.$objectFit ?? 'contain'};
  object-position: ${(props) => props.$objectPosition};

  overflow: hidden;
  border-radius: ${(props) => (props.$radius ? `${props.$radius}` : 'initial')};
`

export const ImageWrapper = styled.div<NormalImageWrapperProps>`
  max-width: ${(props) => (props.$width ? `${props.$width}px` : '100%')};
  max-height: ${(props) => (props.$height ? `${props.$height}px` : '100%')};

  ${({ $objectFit }) =>
    $objectFit === 'cover' &&
    css`
      width: 100%;
      height: 100%;
    `}

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    max-width: ${(props) => (props.$width ? `${props.$width}px` : '100%')};
    max-height: ${(props) => (props.$height ? `${props.$height}px` : '100%')};

    border-radius: ${(props) =>
      props.$radius ? `${props.$radius}` : 'initial'};
    overflow: hidden;

    img {
      object-fit: ${(props) => props.$objectFit ?? 'contain'} !important;
      border-radius: ${(props) =>
        props.$radius ? `${props.$radius}` : 'initial'};
      overflow: hidden;
    }
  }
`
