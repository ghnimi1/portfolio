import React from 'react'

const Project = ({ id, photo, name, url, skills }) => {
    return (
        <div data-aos="fade-up" className=" col-12 col-lg-6 project-card">
            <div className="image-project">
                <img src={`/${photo}`} alt={photo}
                    className="img-pro" />
            </div>
            <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}><h2>{name}</h2></a>
            { skills && <h3>{skills}</h3>}
        </div>
    )
}

export default Project
