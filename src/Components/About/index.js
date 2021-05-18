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
                <div className='about-2'>
                    <img className='about-img' src='https://res.cloudinary.com/gregdusek/image/upload/v1615957747/Dev%20Language%20Icons/CWP-271_sized_av7zgj.jpg' alt='' /> 
                </div>
                <div className='about-3'>
                <h1 className='aboutRight-title'>MY HOBBIES & INTERESTS</h1>
                    <p className='column-paragraph2'>There's a number of activities and hobbies I enjoy when I'm not behind the keyboard working on code.
                    <br/><br/>

                            <li>Enjoying the company of my wife</li>
                            <li>Playing outside with my dogs</li>
                            <li>Fly fishing</li>
                            <li>Listening to music</li>
                            <li>Exploring the offroad trails in my jeep</li>
                            <li>Camping</li>
                            <li>Watching sports</li>
                            <li>Studying the market for the next investment</li>
                            <li>Cooking or grilling</li>
                            <li>Sipping my favorite bourbon</li>
                            <li>Spending time with friends and family</li>
                            <br/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;