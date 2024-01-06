import React from 'react'
import "./ShowMoreButton.css"

type Props = {}

const ShowMoreButton = (props: Props) => {
    return (
        <div className="show-more-block">
            <div className="show-more-icon">
                <i className="bi bi-arrow-right-circle"></i>
            </div>
            <div className="show-more-text">Daha Fazla Göster</div>
        </div>
    )
}

export default ShowMoreButton