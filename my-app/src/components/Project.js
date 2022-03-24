import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Project () {

    return (
        <>
        <Header></Header>

        <div class="container-fluid">
        <div class="row">
            
            <div class="sections left-side col-4" id="about-me">
                <h2>About Me</h2>
            </div>
            <div class="sections col-8">
                <img class="my-pic img-thumbnail mx-auto d-block" src="./assets/images/fb pic.jpg" alt="img of me"></img>
                
                <p class="about-p">I have been into computers ever since I was a young lad. I have built multiple custom PCs for myself and friends. I recently started my programming journey with Georgia Tech's Coding Boot Camp. So far this journey has been amazing and has paid off in my current job. Outside of all that I enjoy hanging with my family and friends as well as playing video games. My favorite video game series are The Legend of Zelda, Warcraft(even though I haven't played that much recently), Diablo, Halo, and Doom. Also I love metal, enough said.</p>
            </div>
            
            <div class="w-100"></div>

            <div class="sections left-side col-4" id="my-work">
                <h2>My Work</h2>
            </div>
            <div class="sections col-8 text-center">
                <p class="work-title">Team Marvel vs Team DC</p>
                <a class="git-repo" href="https://github.com/AWonka/Project1-Hero-VS">Github Repo</a>
                <a href="https://awonka.github.io/Project1-Hero-VS/">
                <img class="first-project img-thumbnail mx-auto d-block imgs" src="./assets/images/project1image.PNG" alt="Marvel vs DC Project"></img>
                </a>
                <p class="work-title">Code Quiz and Work Day Scheduler</p>
                <a href="https://awonka.github.io/HW4-Code-Quiz/">
                <img class="other-projects float-start img-thumbnail imgs" src="./assets/images/codequizimage.PNG" alt="image of code quiz"></img>
                </a>
                <a href="https://awonka.github.io/HW5-Work-Day-Scheduler/">
                <img class="other-projects float-end img-thumbnail imgs" src="./assets/images/dayimage.png" alt="image of day scheduler"></img>
                </a>
                <div class="col text-center">
                
                <a href="https://github.com/AWonka/HW4-Code-Quiz" class="git-repo">Code-Quiz Repo</a>
                <br></br>
                <a href="https://github.com/AWonka/HW5-Work-Day-Scheduler" class="git-repo">Work Day Repo</a>  
                </div>
                
            </div>
            
            <div class="w-100"></div>

            <div class="sections left-side col-4" id="contact-me">
                <h2>Contact Me</h2>
            </div>
            <div class="sections col-8">
            <div class="sections float-start col-4">
                <p class="contact-info">Phone: 620-262-5506</p>
                <p class="contact-info">Email: wonkaaustin@gmail.com</p>
            </div>
            <div class="sections float-end col-4">
                <a class="contact-info" href="https://github.com/AWonka">My Github</a>
                <a class="contact-info" href="https://www.linkedin.com/in/austin-wonka-735661229/">My LinkedIn</a>
            </div>
            </div>
            <div class="w-100"></div>

        </div>
    </div>

    <Footer></Footer>
    </>
    )
}

export default Project;