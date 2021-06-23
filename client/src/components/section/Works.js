import React, { useState, useEffect } from 'react'
import Project from '../layouts/Project'
import { section3Title, section4Title } from '../../profile'
import axios from 'axios'
import Timeline from './Timeline'
import TimelineExperience from './TimelineExperience'
import { useSelector, useDispatch } from 'react-redux'
import { fetchExperience } from '../../redux/actions/ExperienceActions/fetchExperience'
import { fetchProjects } from '../../redux/actions/ProjectActions/fetchProjects'

const Works = () => {
    const dispatch = useDispatch()
    const { experiences } = useSelector(state => state.experiences)
    const { projects } = useSelector(state => state.projects)
    useEffect(() => {
        dispatch(fetchExperience())
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchProjects())
    }, [dispatch])

    return (
        <>
            <div className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section4Title}</h1>
                    </div>
                </>
                <div className='row'>
                    <Timeline layout="1-column" />
                </div>
            </div>
            <div className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">Experience</h1>
                    </div>
                </>
                <div className='row'>
                    <TimelineExperience layout="2-columns" experiences={experiences} />
                </div>
            </div>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section3Title}</h1>
                    </div>
                </>
                <div className="row">
                    {projects && projects.map((x) =>
                        <Project key={x._id} photo={x.photo} url={x.url} name={x.name} skills={x.skills} />
                    )}
                    <div className="col-12 col-lg-6 project">
                        <div className="container vertical-horizontal-center">
                            <i className="fa fa-github no-hover"></i>
                            <p className="text">Want to see more?</p>
                            <p className="subtext">Visit my GitHub</p>
                            <a className="visit" href="https://github.com/ghnimi1" target="_blank" rel="noopener">Visit Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Works
