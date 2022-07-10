const query = `*[_type == "page" && title=='Frontpage'][0]{
    title, content[isHidden != true] {
      ...,
      content[isHidden != true] {
        ...,
        video {
          ...,
          asset->
        },
        media {
        ...,
        asset->
      }
      }
    }
    }`
export default query
