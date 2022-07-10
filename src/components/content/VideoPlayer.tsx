import SanityMuxPlayer from 'sanity-mux-player'

const Video = ({ video }) => {
  if (!video) {
    return <div>No video</div>
  }

  return (
    <SanityMuxPlayer
      assetDocument={video}
      autoload={true}
      autoplay={true}
      showControls={false}
      muted={true}
      loop={true}
    />
  )
}

export default Video
