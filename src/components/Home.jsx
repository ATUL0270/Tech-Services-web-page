import React from 'react'
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from "react-icons/ai";
const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>
                        <h1>tech star</h1>
                        <p>
                            Solution to all your Problems
                        </p>
                    </h1>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        Empower your business with innovative technology solutions.  We are a team of passionate tech experts dedicated to helping businesses achieve their goals through cutting-edge solutions.  We offer a comprehensive range of services, from custom software development and IT consulting to cybersecurity and cloud solutions.  Let us bridge the gap between your vision and reality, driving efficiency, optimizing operations, and propelling you forward in today's ever-evolving technological landscape.
                    </p>
                </div>

            </div>

            <div className="home3"  id="about">

                <div>
                    <h1>
                        Tech Star's Solutions
                    </h1>
                    <p>
                        In today's dynamic technological landscape, staying ahead of the curve can feel like running a marathon.  That's where [Company Name] steps in.  We're a passionate team of tech innovators, not just solution providers.  We take the time to understand your unique business goals and challenges, then leverage our expertise in cutting-edge technologies to craft a customized roadmap to success.  Whether you need a complete software overhaul to streamline operations, robust cybersecurity measures to safeguard sensitive data, or a strategic cloud migration plan to boost scalability and efficiency, we have the tools and experience to deliver.  Our commitment extends beyond initial implementation. We offer ongoing support and maintenance to ensure your solutions continue to evolve alongside your business.  At [Company Name], we believe technology shouldn't be a burden, but an empowering force.  Let us help you unlock the full potential of your organization, optimize workflows, and achieve a sustainable competitive edge in the ever-evolving digital age.
                    </p>
                </div>
            </div>

            <div className="home4"  id="brands"> 
                <div>
                    <h1>
                        Brands
                    </h1>
                    <article>
                        <div style={{
                            animationDelay:"0.3s"
                        }}>
                            <AiFillGoogleCircle />
                            <p>
                                Google
                            </p>
                        </div>
                        <div style={{
                            animationDelay:"0.5s"
                        }}>
                            <AiFillAmazonCircle/>
                            <p>
                                Amazon
                            </p>
                        </div>
                        <div style={{
                            animationDelay:"0.7s"
                        }}>
                            <AiFillYoutube />
                            <p>
                               Youtube
                            </p>
                        </div>
                        <div style={{
                            animationDelay:"0.9s"
                        }}>
                            <AiFillInstagram />
                            <p>
                                Instagram
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home
