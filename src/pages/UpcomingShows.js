

const UpcomingShows = () => {
    return (
        <div className="upcoming-shows">
            <div className="container">
                <div className="show-wrapper">


                <div className="show">
                    <h2>Street Nights</h2>
                    <p>Turn Turn Turn (Portland Oregon)</p>
                    <p>w/ Eliot OK and Sunbathe / Strange PIlgrim (duo set)</p>
                    <p style={{ marginBottom: "30px" }}>Saturday 2/26/26</p>
                    <a

                        className="button"
                        target="_blank"
                        rel="noreferrer"
                        href="https://turnturnturnpdx.com/"
                    >
                        Turn Turn Turn
                    </a>
                </div>

                <div className="show">
                    <h2>Street Nights</h2>
                    <p>Revolution Hall (Portland Oregon)</p>
                    <p>Main Support for Pavement</p>
                    <p style={{ marginBottom: "30px" }}>Saturday 7/18/26</p>
                    <a

                        className="button"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.revolutionhall.com/"
                    >
                        Revolution Hall
                    </a>
                </div>
                <div className="show">
                    <h2>Street Nights</h2>
                    <p>Woodland Park Zoo (Seattle, Washington)</p>
                    <p>Main Support for Pavement</p>
                    <p style={{ marginBottom: "30px" }}>Sunday 7/19/26</p>
                    <a

                        className="button"
                        target="_blank"
                        rel="noreferrer"
                        href="https://zoo.org/zootunes/"
                    >
                        Woodland Park Zoo
                    </a>
                </div>


                </div>

            </div>

        </div>
    )
}

export default UpcomingShows;