import React, { useEffect } from 'react'
import { about, section2title } from '../../profile'
import { useDispatch, useSelector } from "react-redux";
import { fetchSkills } from '../../redux/actions/fetchSkills'

const About = () => {
    const dispatch = useDispatch()
    const { skills } = useSelector(state => state.skills)

    useEffect(() => {
        dispatch(fetchSkills())
    }, [dispatch])

    return (
        <div id="about" className="effect2">
            <div data-aos="zoom-in-up" data-aos-once="true" className="row">
                <div className="col-12 d-none d-md-block offset-md-1 col-md-4 Photo" id="not"></div>
                <div className="col-12 offset-md-1 col-md-6 about">
                    <div className="About-title-box">
                        <h1 id="About" className="red-line">{section2title}</h1>
                    </div>
                    <p className="lead about-text">
                        {about.paragraph}
                    </p>
                </div>
            </div>
            <div className="md:py-14 py-7" id="skills-section">
                <div className="pp-head-line mx-auto text-center">
                    <h1 id="Projects" className="red-line pp-head">Technologies I Use</h1>
                </div>
                <div className="flex flex-wrap justify-evenly items-center"
                    style={{
                        display: 'flex', flexDirection: 'row',
                        justifyContent: 'space-between', alignItems: "center",
                    }}>
                    {skills?.map((skill, i) => (
                        <div
                            style={{ marginTop: '10px' }}
                            key={skill.content}
                            className="row col-12 col-md-4 skill-card-wrap"
                            data-aos="fade-in"
                            data-aos-delay={i * 100}
                        >
                            <div className="row row-cols-6 skill-card"
                                style={{
                                    width: '100%',
                                    display: "flex", flexDirection: 'row',
                                    backgroundColor: '#45474a', margin: '5px',
                                    borderRadius: '3px', padding: '5px',
                                    justifyContent: 'space-between',
                                    textAlign: 'center',
                                    color: 'white',
                                    boxShadow: "5px 5px 2px 1px rgba(0, 0, 0, .1)"
                                }}>
                                <h2 className='col'>{skill.content}</h2>
                                <i className={`col ${skill.iconClass}`}
                                    style={{
                                        color: 'rgba(251, 191, 36)',
                                        fontSize: '35px', margin: '7px'
                                    }}></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
