import React from "react";
import "./About.scss";

const About = ({hero}) => {
    return(
        <div>
        <h1>BIO</h1>
            <div className="aboutme">
                {hero.map((item) => {
                    return(
                        <div className="card" key={JSON.stringify(item)}>
                            <p>{item.info}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}


export default About;