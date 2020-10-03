import React from 'react';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
    // particles: {
    //     number: {
    //         value: 250,
    //         density: {
    //             enable: true,
    //             value_area: 1500
    //         }
    //     }
    // }
}

function App () {
    return (
        // <div className="App">
        //     <Particles className='particles'
        //         params={particlesOptions}
        //     />
        // </div>
        <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 250,
                        "density": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "speed": 5,
                            "size_min": 0.5
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "random": true,
                        "speed": 1,
                        "direction": "top",
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "bubble"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    },
                    "modes": {
                        "bubble": {
                            "distance": 250,
                            "duration": 2,
                            "size": 0,
                            "opacity": 0
                        },
                        "repulse": {
                            "distance": 400,
                            "duration": 4
                        }
                    }
                }
            }} />
    )
}

export default App;
