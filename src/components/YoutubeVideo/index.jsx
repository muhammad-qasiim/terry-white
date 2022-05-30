
import React from 'react'
import ReactPlayer from 'react-player/youtube'

const YoutubeVideo = () => {

    return (
        <>
            <section className="flex justify-center container mx-auto px-24 lg:px-99 my-60 lg:my-99">

                <ReactPlayer
                    volume={0}
                    muted={true}
                    playing={true}
                    controls={true}
                    url='https://www.youtube.com/embed/z-sOU0AHFTg' />

            </section>
        </>
    )
}

export default YoutubeVideo;