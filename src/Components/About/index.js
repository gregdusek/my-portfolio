import './styles.css';

const About = () => {
    return (
        <div className='page-container'>
            <h1 className='page-title'>About Me</h1>
            <div className='aboutColumn-container'>
                <div className='about-1'>
                    <h1 className='aboutLeft-title'>HEY, I'M GREG!</h1>
                    <p className='column-paragraph1'>I am a full stack software engineer, web developer, and the man behind the code. I am trained in both frontend and backend development. I can help build applications with responsive design, databases from the ground up, and custom API's.
                    <br/><br/>
                    Born in a small town and raised in a big city, at a young age I learned how to thrive in a fast paced environment while maintaining my southern charm. Experience from a variety of career fields has taught me valuable skills leading to my success.
                    <br/><br/>
                    Let's talk more about how I can help build your e-commerce site, blog, personal portfolio, or custom software. Please see my contact page for more info.
                    <br/><br/></p>
                    
                </div>
                <div className='about-2'>
                    <img className='about-img' src='https://res.cloudinary.com/gregdusek/image/upload/v1615957747/Dev%20Language%20Icons/CWP-271_sized_av7zgj.jpg' alt='' /> 
                </div>
                <div className='about-3'>
                <h1 className='aboutRight-title'>MY HOBBIES & INTERESTS</h1>
                    <p className='column-paragraph2'>When I'm not behind the keyboard working, you can find me keeping busy with a variety of hobbies. 
                    <br/><br/>
                            <li>Enjoying the company of my wife</li>
                            <li>Playing outside with my dogs</li>
                            <li>Fly fishing</li>
                            <li>Listening to live music</li>
                            <li>Exploring the offroad trails in my jeep</li>
                            <li>Camping</li>
                            <li>Watching hockey and college football</li>
                            <li>Studying the market for my next investment</li>
                            <li>Running my barbecue smoker</li>
                            <li>Bourbon tasting</li>
                            <li>Spending time with friends and family</li>
                            <li>Traveling to new places</li>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;