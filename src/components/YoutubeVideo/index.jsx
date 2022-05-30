
import React from 'react'
import ReactPlayer from 'react-player/youtube'

const YoutubeVideo = () => {

    return (
        <>
            <section className="flex justify-center w-full container mx-auto px-24 lg:px-99 my-99">

                <ReactPlayer
                    width={'100%'}
                    height={'auto'}
                    style={{aspectRatio: '16/9'}}
                    volume={0}
                    muted={true}
                    playing={true}
                    controls={true}
                    url='https://www.youtube.com/watch?v=z-sOU0AHFTg&ab_channel=TWCPenrith' />

            </section>
        </>
    )
}

export default YoutubeVideo;