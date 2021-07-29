import './styles.css';

const Contact = () => {

    return(
        <div className='page-container'>
            <h1 className='page-title'>Contact info</h1>
                <div className='contactColumn-container'>
                    <div className='contact'>
                        <h2 className='contact-title'>THE BEST WAY TO CONTACT ME</h2>
                        <p className='contact-paragraph'>
                            Email: <a href='mailto:thegregdusek@gmail.com'>thegregdusek@gmail.com</a>
                        </p>
                    </div>
                    <div className='linked-column'>
                        <a href="https://www.linkedin.com/in/greg-dusek-50559759/" target='blank'>
                            <img className='contact-icon' src="https://res.cloudinary.com/gregdusek/image/upload/v1615957736/Dev%20Language%20Icons/linkedin_erqmje.svg" alt="" />
                        </a>
                        <a href="https://www.linkedin.com/in/greg-dusek-50559759/" target='blank'>
                            <h1 className='linked-title'>Connect via LinkedIn</h1>
                        </a>
                    </div>
                </div>
        </div>
    )
};

export default Contact;

