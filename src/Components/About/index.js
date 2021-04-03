import './styles.css';

const About = () => {
    return (
        <div className='about-container'>
            <h1 className='page-title'>ABOUT ME</h1>
            <div className='aboutColumn-container'>
                <div className='about-1'>
                    <h1 className='aboutLeft-title'>HEY, I'M GREG!</h1>
                    <p className='column-paragraph1'>I am a full stack software engineer, software developer, web developer, and the man behind the code. My interest is full stack, frontend, backend, web development, and software development.
                    <br/><br/>
                    Born in a small town and raised in a big city, at a young age I learned how to thrive in a fast paced environment while maintaining my southern charm. Tenure within multiple fields has taught me valuable skills leading to my success today.
                    <br/><br/>
                    Whether you need an e-commerce site, blog, personal portfolio, or useful software, I can help you bring that idea to fruition. Details on how to contact me is available on my contact page.</p>
                </div>
                <img className='about-2' src='https://res.cloudinary.com/gregdusek/image/upload/v1615957747/Dev%20Language%20Icons/CWP-271_sized_av7zgj.jpg' alt='' /> 
                <div className='about-3'>
                <h1 className='aboutRight-title'>MY HOBBIES & INTERESTS</h1>
                    <p className='column-paragraph2'>Coding I don't consider a job because I enjoy it so much. But when I'm not behind the keyboard coding, you can find me out enjoying on of the following activities:
                    <br/><br/>

                            <li>Spending time with my wife.</li>
                            <li>Spending time with my dogs Bella (German Shepherd)& Beau (Belgian Malinois).</li>
                            <li>Fly fishing.</li>
                            <li>Listening to music (I'm an audiophile).</li>
                            <li>Hitting offroad trails in my Jeep Wrangler.</li>
                            <li>Camping.</li>
                            <li>Watching hockey.</li>
                            <br/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;