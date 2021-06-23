import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import StarIcon from '@material-ui/icons/Star';
import SchoolIcon from '@material-ui/icons/School';
import '../../styles/no-touch.min.css'

function Timeline({ layout }) {
    return (
        <VerticalTimeline
            layout={layout}
        >
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                date="2015 - 2018"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                    Gafsa Private Higher School of Engineers
                    </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Software Engineering
                </h4>
                <p>
                    I graduated from Gafsa Private Higher School of Engineers with Software Engineering. I have learned the fundamentals of Software Engineer and Computer Science. I have also learned many software and design concepts and problem solving skills throughout my time here.    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2010 - 2013"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Gafsa Higher Institute of Business Administration</h3>
                <h4 className="vertical-timeline-element-subtitle">applied license in computer and multimedia technology
</h4>
                <p>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2009 - 2010"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">Ibn arafa high school of souk jedid
</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor's degree in computer science</h4>
                <p>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
    );
}

export default Timeline;