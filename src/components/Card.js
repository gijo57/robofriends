import React, { Fragment } from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}`} alt='A robot'></img>
            <Fragment>
                <h2>{name}</h2>
                <p>{email}</p>
            </Fragment>
        </div>
    );
};

export default Card;