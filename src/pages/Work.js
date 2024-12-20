
import data from '../utils/data';
import Scene from '../components/Scene';
import React, {useEffect} from 'react';

const Work = () => {
    console.log("data", data);   
    const videoIds = [
        '5n89sjiImHs',
        't6Bd5F9nFvc',
        'lPur9ni9XZ4',
        '6hUWGU8EbDc',
        'EIInUImFsFk',
        'pW6c2-RaFi8',
        'DjPDkm1TUE4',
        'nDfZr9QlW9o',
        'tNgVIRQz8BA',
        'EDv0gj9P6lU',
        'Z4RexZ_06S0',
        'zDyGHjefucw',
        'Je10_vbF2-c'
    ];
    
    
    
    useEffect(() => {
        const workDiv = document.querySelector('.work');
        const topPosition = workDiv.offsetTop;
        console.log('Top position of .work div:', topPosition);
      });
    return (
        <section className="work">
            <div className="container">
                <div className="work__wrapper">
                    <div className='drums-mobi'>
                        <img src="/drums-mobi.jpg "/>
                    </div>
                    <div className='card-3d'>
                        <Scene/>
                    </div>
                    <div className="card">
                        <h1>Tours/Live</h1>
                        <ul>
                            {
                                data.toursLive.map((x)=> {
                                    return (
                                        <li>{x}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="card">
                        <h1>Discography</h1>
                        <ul>
                            {
                                data.discography.map((x)=> {
                                    return (
                                        <li>{x}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="card">
                        <h1>TV</h1>
                        <ul>
                            {
                                data.tv.map((x)=> {
                                    return (
                                        <li>{x}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className='tv-wrapper'>
                    <h1>JMTV</h1>
                    <div className="video-container">
      <div className="column">
        {videoIds.slice(0, Math.ceil(videoIds.length / 2)).map(videoId => (
          <div key={videoId} className="video-wrapper">
            <iframe
              title={`YouTube Video ${videoId}`}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <div className="column">
        {videoIds.slice(Math.ceil(videoIds.length / 2)).map(videoId => (
          <div key={videoId} className="video-wrapper">
            <iframe
              title={`YouTube Video ${videoId}`}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>

                </div>

            </div>

        </section>
    )
}

export default Work;