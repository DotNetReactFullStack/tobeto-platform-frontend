import React from 'react'
import "./Survey.css";

type Props = {}

const Survey = (props: Props) => {
    return (
        <div className='survey-component'>
            <img
                className='image-survey-not-found'
                src={process.env.PUBLIC_URL + '/survey-not-found.png'}
            />
            <div className="information-for-small-screen">
                Atanmış herhangi anketiniz bulunmamaktadır.
            </div>
        </div>

    )
}

export default Survey