import React from 'react';
import fa1 from "../img/fanart1.png"
import fa2 from "../img/fanart2.jpeg"
import fa3 from "../img/fanart3.jpeg"
import fa4 from "../img/fanart4.jpeg"
import microwaveCat from "../img/catMicrowave.jpeg"
import '../components/grid.css'
import '../components/parallax.css'

export default function Home() {
    return (
        <>
            <h1>Welcome to Gordon Ramsay's Fanpage!</h1>
            <iframe width="100%" height="500" src="https://www.youtube.com/embed/rEMXENwQZA4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            <h2>I love Gordon!!!!!!</h2>
            <div>
                <p>I don't really know much web dev, but I knew that I had to make this website, and I am a very perseverent person, so I will endure through this pain that is the process of making this in order to appease my man.</p>
                <p>Here's some fanart I did yesterday. I think they look pretty good. Hope you like it Gordon!!!!!!!! &lt;3</p>
                <div class='parallax-fanart'></div>
                {/* <div class='grid'>
                        <img src={fa1} class='img-contain'></img>
                        <img src={fa3} class='img-contain'></img>
                        <img src={fa2} class='img-contain'></img>
                        <img src={fa4} class='img-contain'></img>
                    </div> */}
               </div>

            <section>
                <div>
                    <h2>Blog</h2>

                    <p>
                        I didn't mention this before, but I hope you liked the fancam I made! I spent 984 hours doing it because I have never used movie maker before. So it was pretty tough. Whoever made that needs to talk to people because clearly, it is not intuitive at all.
                    </p>

                    <p>
                        Also, this whole html thing seems so pointless. Why can't I just type what I want and have it appear? Why do I need these random signs like p??? I don't want to type that! I just want to type the things that I think and have that appear. Is that so hard? Man, some people are such idiots!
                    </p>

                    <p>
                        Oh I just remembered I need to go shopping! I don't want to forget the things I want, so let me make a shopping list down here:
                        <ul>
                            <li>
                                Trader Joe's Pork Gyoza
                            </li>
                            <li>
                                Cat
                            </li>
                            <li>
                                Hack kitchen chef hat for the cat
                            </li>
                            <li>
                                Microwave to put the cat
                            </li>
                            <img src={microwaveCat} width="30%" height="30%"></img>
                        </ul>
                    </p>
                </div>
            </section>
        </>
    );
};
