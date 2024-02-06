
import data from '../utils/data';
import Scene from '../components/Scene';
import React, {useEffect} from 'react';

const Work = () => {
    console.log("data", data);   
    
    
    useEffect(() => {
        const workDiv = document.querySelector('.work');
        const topPosition = workDiv.offsetTop;
        console.log('Top position of .work div:', topPosition);
      });
    return (
        <section className="work">
            <div className="container">
                <div className="work__wrapper">
                    <div className='card'>
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

            </div>

        </section>
    )
}

export default Work;