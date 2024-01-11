import React from 'react'
import "./Survey.css";

type Props = {}

const Survey = (props: Props) => {
    return (
        <div className='survey-component'>
            <img
                className='image-survey-not-found'
                src={process.env.PUBLIC_URL + '/images/survey-not-found.svg'}
            />
            <div className="information-text">
                Atanmış herhangi anketiniz bulunmamaktadır.
            </div>
        </div>

    )
}

export default Survey