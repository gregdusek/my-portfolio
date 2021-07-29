import './styles.css';
import Typed from 'react-typed';

const words = ['Problem Solver','Leader','Multitasker','Team Player','Volunteer','Developer','Software Engineer'];

const Home = () => {

    return (
        <div className="page-container">
            <h1 className="name">Greg Dusek</h1>
            <div className="page-content">
                <div className="typed">
                    <h1>I am a...<Typed
                                  strings={words}
                                  typeSpeed={100}
                                  backSpeed={125}
                                  loop={true}/>
                    </h1>
                </div>
                <div className="home-intro">
                    <h2>An analytical full-stack software engineer proven to learn quickly, adapt to changes, and thrive in a fast-paced environment. Prior experience in the information technology and commercial audiovisual fields taught the necessary skills of leadership, time management, multitasking, communicating effectively in diverse environments, and solving problems efficiently. Motivated to learn and grow by leveraging skills to excel as a software engineer at your company.</h2>
                </div>
            </div>
        </div>
    )
};

export default Home;