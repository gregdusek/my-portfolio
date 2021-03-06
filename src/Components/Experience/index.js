import './styles.css';

const Experience = () => {
    return (
        <div className='page-container'>
            <h1 className='page-title'>Experience</h1>
                <div className='row-container'>
                    <div className='training-row'>
                        <h2 className='training-title'>Training</h2>
                        <p className='training-paragraph'>
                            My interest to become a software engineer began when I applied to the Software Engineering Immersive program through General Assembly. Before signing on the dotted line, General Assembly has applicants complete a prep course to help determine whether the program is a good fit for the applicant. All campus locations were temporarily closed due to Covid 19 and my course was taken remotely online. The course consists over 400+ hours of professional training over 12 weeks, including daily lectures, code alongs, homework, and projects. Instructors teach through a hands-on approach with a focus on real-world applications, object oriented, functional programming, and RESTful API architecture within the MERN stack. Upon graduating the course, over 1000 hours had been invested to my class time, homework, and projects; but my training did not stop there. I've continued practicing, improving, and building my skills through online courses via The Odin Project, Code Academy, and Udemy.
                        </p>
                    </div>
                    <div className='background-row'>
                        <h2 className='background-title'>Professional</h2>
                        <p className='background-paragraph'>I acquired my first job at 15 years old and have worked consistently since then. With over 15 years of professional experience in many career fields, I've had the opportunity to build a valuable skill set. My communication and customer service skills is highlighted by my natural desire to help others in any way possible. From serving patrons in a restaurant to leading a team of audio visual technicians; my ability to work under pressure, mulit-task, meet deadlines, and still provide customer satisfaction is a couple reasons why I value my project management skills. Adapting to constantly changing environments, picking up the slack, and just being able to "roll with the punches" is why I see myself as a diverse leader within the work place.
                        </p>
                    </div>
                    <div className='column-container'>
                        <div className='column-1'>
                            <a href="http://github.com/gregdusek" target='blank'>
                                <img className='git-icon' src="https://res.cloudinary.com/gregdusek/image/upload/v1615957748/Dev%20Language%20Icons/github_i7cwek.svg" alt="" />
                            </a>
                                <h1 className='column-title'>View my GitHub repositories</h1>
                        </div>
                        <div className='column-2'>
                            <a href="https://docs.google.com/document/d/1ikF0x-zfTb9OnNFkxQmWpW9fha33AwBu/edit?usp=sharing&ouid=104543661577309889994&rtpof=true&sd=true" target="blank">
                                <img className='resume-icon' src="https://res.cloudinary.com/gregdusek/image/upload/v1627412107/Dev%20Site%20Images/icons8-download-resume-100_qifajz.png" alt=""/>
                            </a>
                                <h1 className='column-title'>Download my resume</h1>
                        </div>
                        <div className='column-3'>
                            <a href="https://www.linkedin.com/in/greg-dusek-50559759/" target='blank'>
                                <img className='linked-icon' src="https://res.cloudinary.com/gregdusek/image/upload/v1615957736/Dev%20Language%20Icons/linkedin_erqmje.svg" alt="" />
                            </a>
                                <h1 className='column-title'>Connect with me on LinkedIn</h1>
                        </div>
                    </div>
                </div>
        </div>
    )
};

export default Experience;