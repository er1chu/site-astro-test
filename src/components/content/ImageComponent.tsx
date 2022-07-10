import Img from 'react-cool-img'
import {
  getNearestBreakpointWidth,
  getImageUrl,
  srcSetBuilder,
} from '@/utils/layout-helpers'
// import useDimensions from 'react-cool-dimensions'

const ImageComponent = ({ node, sizes }) => {
  if (!node.media) return null
  const { metadata, extension } = node.media.asset
  const { asset } = node.media
  // const { observe, width, height } = useDimensions<HTMLDivElement | null>()

  return (
    <Img
      placeholder={extension === 'svg' ? null : metadata.lqip}
      src={getImageUrl(asset, sizes[0])}
      srcSet={extension === 'svg' ? null : srcSetBuilder(asset, sizes)}
      sizes={
        extension === 'svg'
          ? null
          : `(min-width: 768px) ${getNearestBreakpointWidth(
              500,
              sizes
            )}px, 100vw`
      }
      width="500"
      height="auto"
      className="overflow-hidden rounded-md"
      style={{ width: '100%', height: 'auto' }}
      debounce={200}
      alt={node.caption ? node.caption : 'Image'}
      lazy
    />
  )
}

export default ImageComponent
