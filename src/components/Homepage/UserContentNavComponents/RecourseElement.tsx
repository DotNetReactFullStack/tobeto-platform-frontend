import React from 'react'
import './RecourseElement.css'

type Props = {}

const RecourseElement = (props: Props) => {
    return (
        <div className='recourse-element'>
            <div className="recourse-header">

                <div className="recourse-header-left-side">
                    <div className="recourse-organization-name number-of-lines-1 text-length-30ch">
                        İstanbul Kodluyor
                    </div>
                    <div className="recourse-type-info-title number-of-lines-1 text-length-30ch">
                        Bilgilendirme
                    </div>
                </div>

                <div className="recourse-header-right-side">
                    <div className="recourse-step number-of-lines-1 text-length-15ch">
                        Kabul Edildi
                    </div>
                </div>

            </div>
            <div className="recourse-content">
                <div className="recourse-detail-step number-of-lines-1 text-length-35ch">
                    <span className="recourse-detail-step-icon">
                        <i className="bi bi-check-lg"></i>
                    </span>
                    <span className="recourse-detail-step-description">
                        İstanbul Kodluyor Başvuru Formu onaylandı.
                    </span>
                </div>
                <div className="recourse-detail-step number-of-lines-1 text-length-35ch">
                    <span className="recourse-detail-step-icon">
                        <i className="bi bi-check-lg"></i>
                    </span>
                    <span className="recourse-detail-step-description">
                        İstanbul Kodluyor Belge Yükleme Formu onaylandı.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default RecourseElement