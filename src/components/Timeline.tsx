import React from 'react';
import '/src/css/Timeline.css';

//Interfaces in Typescript are used to Define Object Structures
interface TimelineItemProps {
    date: string;
    title: string;
    description: string;
    position?: 'left' | 'right'; // '|' is the union operator
    image: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, description, position = 'left', image }) => {
    return (
        <div className={`timeline-item ${position}`}>
            <div className="timeline-content">
                <div className="timeline-date">{date}</div>
                <h3 className="timeline-title">{title}</h3>
                <p className="timeline-description">{description}</p>
            </div>
            <img className={'square-container'} src={`${image}`} title="Timeline Image"/>
        </div>
    );
};

interface TimelineProps {
    items: TimelineItemProps[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
    return (
        <div className="timeline-container">
            <div className="timeline-line" />
            {items.map((item, index) => (
                <TimelineItem key={index} {...item} />
            ))}
        </div>
    );
};

export default Timeline;

