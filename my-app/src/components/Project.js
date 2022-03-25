import React from 'react';
import Header from './Header';
import Footer from './Footer';
// importing images
import myPic from '../images/fb pic.jpg';
import proj1 from '../images/project1image.PNG';
import proj2 from '../images/codequizimage.PNG';
import proj3 from '../images/dayimage.png';

function Project () {

    return (
        <>
        <Header></Header>

        <div className="container-fluid">
        <div className="row">
            
            <div className="sections left-side col-4" id="about-me">
                <h2>About Me</h2>
            </div>
            <div className="sections col-8">
                <img className="my-pic img-thumbnail mx-auto d-block" src={myPic} alt="img of me"></img>
                
                <p className="about-p">I have been into computers ever since I was a young lad. I have built multiple custom PCs for myself and friends. I recently started my programming journey with Georgia Tech's Coding Boot Camp. So far this journey has been amazing and has paid off in my current job. Outside of all that I enjoy hanging with my family and friends as well as playing video games. My favorite video game series are The Legend of Zelda, Warcraft(even though I haven't played that much recently), Diablo, Halo, and Doom. Also I love metal, enough said.</p>
            </div>
            
            <div className="w-100"></div>

            <div className="sections left-side col-4" id="my-work">
                <h2>My Work</h2>
            </div>
            <div className="sections col-8 text-center">
                <p className="work-title">Team Marvel vs Team DC</p>
                <a className="git-repo" href="https://github.com/AWonka/Project1-Hero-VS">Github Repo</a>
                <a href="https://awonka.github.io/Project1-Hero-VS/">
                <img className="first-project img-thumbnail mx-auto d-block imgs" src={proj1} alt="Marvel vs DC Project"></img>
                </a>
                <p className="work-title">Code Quiz and Work Day Scheduler</p>
                <a href="https://awonka.github.io/HW4-Code-Quiz/">
                <img className="other-projects float-start img-thumbnail imgs" src={proj2} alt="of code quiz"></img>
                </a>
                <a href="https://awonka.github.io/HW5-Work-Day-Scheduler/">
                <img className="other-projects float-end img-thumbnail imgs" src={proj3} alt="of day scheduler"></img>
                </a>
                <div className="col text-center">
                
                <a href="https://github.com/AWonka/HW4-Code-Quiz" className="git-repo">Code-Quiz Repo</a>
                <br></br>
                <a href="https://github.com/AWonka/HW5-Work-Day-Scheduler" className="git-repo">Work Day Repo</a>
                </div>
                
            </div>
            
            <div className="w-100"></div>

            <div className="sections left-side col-4" id="contact-me">
                <h2>Contact Me</h2>
            </div>
            <div className="sections col-8">
            <div className="sections float-start col-4">
                <p className="contact-info">Phone: 620-262-5506</p>
                <p className="contact-info">Email: wonkaaustin@gmail.com</p>
            </div>
            <div className="sections float-end col-4">
                <a className="contact-info" href="https://github.com/AWonka">My Github</a>
                <a className="contact-info" href="https://www.linkedin.com/in/austin-wonka-735661229/">My LinkedIn</a>
            </div>
            </div>
            <div className="w-100"></div>

        </div>
    </div>

    <Footer></Footer>
    </>
    )
}

export default Project;