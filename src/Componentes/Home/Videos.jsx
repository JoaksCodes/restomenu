import React from 'react'
import './Videos.css'

const Videos = () => {
    return (
        <>
            <section className='image-fondo'>
                <div className="video-grid mt-5">
                    <div className="video-item">
                        <video className='video-element' src="../src/assets/video1.mp4" autoPlay loop muted></video>
                    </div>
                    
                    <div className="video-item">
                        <video className='video-element' src="../src/assets/video2.mp4" autoPlay loop muted></video>
                    </div>

                    <div className="video-item">
                        <video className='video-element' src="../src/assets/video3.mp4" autoPlay loop muted></video>
                    </div>

                </div>

            </section>


        </>
    )
}

export default Videos