import './styles.css';

const Portfolio = () => {

    return (
        <div className="portfolio-container">
            <h1 className="page-title">Projects</h1>
                <div className="portfolio-card-container">
                    <div className="card">
                        <img className="card-top" src="https://res.cloudinary.com/gregdusek/image/upload/v1621296234/Dev%20Site%20Images/ElenaJohnsonArt_qvsv8j.png" alt="" />
                        <div className="card-bottom">
                            <div className="card-title">Elena Johnson Art</div>    
                            <p className="card-description">Built on the Wix platform; Elena and I worked together to create a portfolio website to show off her artwork. Elena had an existing Wix Pro membership, the artistic talent, and needed a hand on the technical front. After commissioning Elena for an art piece, I realized she didn't have a website and offered my services. Go check out her work at the link below! </p>
                            <div className="lang-used">
                                <div className='lang-icon-container'>
                                    <div className='lang-icon' src='' alt=''/>
                                </div>
                                <div className='lang-icon-container'>
                                    <div className='lang-icon' src='' alt=''/>
                                </div>
                                <div className='lang-icon-container'>
                                    <div className='lang-icon' src='' alt=''/>
                                </div>
                                <div className='lang-icon-container'>
                                    <div className='lang-icon' src='' alt=''/>
                                </div>
                            </div>
                            <a className="deployed-link" href="www.elenajohnsonart.com">Live Site</a>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-top" src="https://res.cloudinary.com/gregdusek/image/upload/v1621289508/Dev%20Site%20Images/Tabled_mthyno.png" alt="" />
                        <div className="card-bottom">
                            <div className="card-title">Tabled</div>    
                            <p className="card-description">Tabled is a concept application created as a solution for the small business hackathon that was hosted by General Assembly. The goal was to create an application or service that benefits small business owners affected by COVID 19. This is in early stages of development and not yet working. Built with React on the frontend and backend yet to be determined.</p>
                            <div className="lang-used">
                                <div className='lang-icon-container'>
                                    <img className='lang-icon' src='https://res.cloudinary.com/gregdusek/image/upload/v1615957741/Dev%20Language%20Icons/react_xjy6ou.svg' alt='svg'/>
                                </div>
                                <div className='lang-icon-container'>
                                    <img className='lang-icon' src='https://res.cloudinary.com/gregdusek/image/upload/v1615957750/Dev%20Language%20Icons/html5_lmrgt0.svg' alt='svg'/>
                                </div>
                                <div className='lang-icon-container'>
                                    <img className='lang-icon' src='https://res.cloudinary.com/gregdusek/image/upload/v1615957747/Dev%20Language%20Icons/css3_p0ssge.svg' alt='svg'/>
                                </div>
                                <div className='lang-icon-container'>
                                    <img className='lang-icon' src='https://res.cloudinary.com/gregdusek/image/upload/v1615957750/Dev%20Language%20Icons/javascript_db9xwo.svg' alt='svg'/>
                                </div>
                            </div>
                            <div className="link-container">
                                <a className="deployed-link" href="https://www.figma.com/file/nkoANgtJZoYVxb4eqoTOfM/Small-Businesses-Hackathon?node-id=327%3A70">Figma</a>
                                <a className="deployed-link" href="https://github.com/gregdusek/Small-Business-Hackathon/tree/master/small-business-hackathon">Git Hub</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-top" src="https://res.cloudinary.com/gregdusek/image/upload/v1621302773/Dev%20Site%20Images/GOATflix_cljvkq.png" alt="" />
                        <div className="card-bottom">
                            <div className="card-title">GOATflix</div>    
                            <p className="card-description">Submitted as my final project for class, GOATflix is a continuation of an earlier school project. Final project requirements included learning a new framework, language, or component, to be used in the project. GOATflix is built from React Redux on the frontend, MongoDB on the backend, pulls data via The Movie Database api, and is styled with Styled Components. </p>
                            <div className="lang-used">
                                <div className='lang-icon-container'>
                                    <img className='lang-icon' src='https://res.cloudinary.com/gregdusek/image/upload/v1615957741/Dev%20Language%20Icons/react_xjy6ou.svg' alt='svg'/>
                                </div>
                                <div className='lang-icon-container'>
                                    <img className='lang-icon' src='https://res.cloudinary.com/gregdusek/image/upload/v1615957742/Dev%20Language%20Icons/redux_mrfmvf.svg' alt='svg'/>
                                </div>
                                <div className='lang-icon-container'>
                                    <img className='lang-icon' src='https://res.cloudinary.com/gregdusek/image/upload/v1615957736/Dev%20Language%20Icons/styled-components_v5wamk.svg' alt='svg'/>
                                </div>
                                <div className='lang-icon-container'>
                                    <img className='lang-icon' src='https://res.cloudinary.com/gregdusek/image/upload/v1615957738/Dev%20Language%20Icons/mongodb_ednvig.svg' alt='svg'/>
                                </div>
                            </div>
                            <div className="link-container">
                                <a className="deployed-link" href="https://goatflix-4gcar.ondigitalocean.app/">Live App</a>
                                <a className="deployed-link" href="https://github.com/gregdusek/FinalProject">Git Hub</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
};

export default Portfolio;