import React from 'react';

const Image = (props) => {
    console.log (props)
    return (
        <div>
            <img src={props.imageProps} />
        </div>
    )

}


export default Image