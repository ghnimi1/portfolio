import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import '../../styles/no-touch.min.css'

function TimelineExperience({ layout, experiences }) {
    return (
        <VerticalTimeline
            layout={layout}
        >
            {experiences?.map(experience => (
                <VerticalTimelineElement
                    key={experience._id}
                    className="vertical-timeline-element--work"
                    date={experience.date}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h4 className="vertical-timeline-element-title">
                        {experience.employer}
                    </h4>
                    <h5 className="vertical-timeline-element-subtitle">
                        {experience.position}
                    </h5>
                    <p>
                        {experience.description}</p>
                    <p style={{ color: '#ccc' }}>{experience.skills}</p>
                </VerticalTimelineElement>
            ))}
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
    );
}

export default TimelineExperience;