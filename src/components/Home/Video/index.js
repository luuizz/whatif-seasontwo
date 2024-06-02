import React from 'react'

export default async function VideoComponent() {

    const src = await getVideoSrc();

  return <iframe src={src} frameborder="0" all></iframe>
}
