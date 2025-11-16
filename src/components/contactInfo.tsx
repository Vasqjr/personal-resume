import React from 'react';
import '/src/css/contactInfo.css';

interface contactCardProps {
    title: string;
    image: string;
    iconId: string;
}

const ContactCard: React.FC<contactCardProps> = ({ title, image, iconId }) => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log('Div Clicked');
        
    }

    return (
        <div className={"contact-card"}>
            <div className="contact-card-content" onClick={handleClick}>
                <img className="contact-icon" src={`${image}`} id={iconId} />
                <h3 className="contact-title">{title}</h3>
            </div>
        </div>
    );
};

interface contactSectionProps {
    items: contactCardProps[];
}

const ContactSection: React.FC<contactSectionProps> = ({ items }) => {
    return (
        <div className="contact-section">
            {items.map((item, index) => (
                <ContactCard key={index} {...item} />
            ))}
        </div>
    );
};

export default ContactSection;