import React from 'react';
import '/src/css/Banner.css';

//Simple Case: Attribute Name -> Attribute Name + Type
const Banner = ({ imageUrl, altText }: { imageUrl: string, altText: string}) => {
    return (
        <>
            <img className="bannerImage" src={imageUrl} alt={altText}/>
        </>
    );
}

export default Banner;