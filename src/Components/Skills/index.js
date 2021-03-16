import './styles.css';

const Skills = () => {

    return (
        <div className='skills-container'>
            <h1 className='page-title'>SKILLS</h1>
            <div className='column-container'>
                <div className='column-language'>
                    <h1 className='column-title'>Languages</h1>
                </div>
                <div className='column-frontend'>
                    <h1 className='column-title'>Frontend</h1>
                </div>
                <div className='column-backend'>
                    <h1 className='column-title'>Backend</h1>
                </div>
                <div className='column-databases'>
                    <h1 className='column-title'>Databases</h1>
                </div>
                <div className='column-tools'>
                    <h1 className='column-title'>Tools</h1>
                </div>
            </div>
        </div>
    )
};

export default Skills;