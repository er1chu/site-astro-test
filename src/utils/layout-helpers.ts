import imageUrlBuilder from '@sanity/image-url'
import client from '@/lib/sanityClient'

export const resolveVideoAspectRatio = (aspectRatio: string) => {
  const dimensions = aspectRatio.split(':')
  const width = parseInt(dimensions[0])
  const height = parseInt(dimensions[1])
  return width / height
}

export const getNearestBreakpointWidth = (
  componentWidth: number,
  imageSizes: Array<number>
) => {
  return imageSizes.reduce((previousValue, currentValue) => {
    let previousValueDifference = Math.abs(previousValue - componentWidth)
    let currentValueDifference = Math.abs(currentValue - componentWidth)

    if (previousValueDifference == currentValueDifference) {
      return previousValue > currentValue ? previousValue : currentValue
    } else {
      return currentValueDifference < previousValueDifference
        ? currentValue
        : previousValue
    }
  })
}

export const getImageUrl = (asset: any, width?: number) => {
  if (asset.extension === 'svg')
    return imageUrlBuilder(client).image(asset).url()
  return imageUrlBuilder(client).image(asset).auto('format').width(width).url()
}

export const srcSetBuilder = (asset, sizes) => {
  if (!asset) return null
  const srcSet = []
  sizes.map((size) => {
    srcSet.push(`${getImageUrl(asset, size)} ${size}w,`)
  })

  return srcSet
}
