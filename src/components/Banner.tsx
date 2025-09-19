import React from 'react';
import '/src/css/Banner.css';

//Simple Case: Attribute Name -> Attribute Name + Type
const Banner = ({ imageUrl }: { imageUrl: string}) => {
    return (
        <>
            <img className="bannerImage" src={imageUrl}/>
        </>
    );
}

export default Banner;