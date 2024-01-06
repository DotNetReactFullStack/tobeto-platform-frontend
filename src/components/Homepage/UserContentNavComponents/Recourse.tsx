import React from 'react'
import '../UserContentNavComponents/Recourse.css'
import ShowMoreButton from '../../ShowMoreButton/ShowMoreButton'

type Props = {}

const Recourse = (props: Props) => {


  return (
    <>
      <div className='recourse-component'>
        <div className='recourse-element'>
          <div className="recourse-header">

            <div className="recourse-header-left-side">
              <div className="recourse-organization-name">
                İstanbul Kodluyor
              </div>
              <div className="recourse-type-info-title">
                Bilgilendirme
              </div>
            </div>

            <div className="recourse-header-right-side">
              <div className="recourse-step">
                Kabul Edildi
              </div>
            </div>

          </div>
          <div className="recourse-content">
            <div className="recourse-detail-step">
              <span className="recourse-detail-step-icon">
                <i className="bi bi-check-lg"></i>
              </span>
              <span className="recourse-detail-step-description">
                İstanbul Kodluyor Başvuru Formu onaylandı.
              </span>
            </div>
            <div className="recourse-detail-step">
              <span className="recourse-detail-step-icon">
                <i className="bi bi-check-lg"></i>
              </span>
              <span className="recourse-detail-step-description">
                İstanbul Kodluyor Belge Yükleme Formu onaylandı.
              </span>
            </div>
          </div>
        </div>

        <div className='recourse-element'>
          <div className="recourse-header">

            <div className="recourse-header-left-side">
              <div className="recourse-organization-name">
                İstanbul Kodluyor
              </div>
              <div className="recourse-type-info-title">
                Bilgilendirme
              </div>
            </div>

            <div className="recourse-header-right-side">
              <div className="recourse-step">
                Kabul Edildi
              </div>
            </div>

          </div>
          <div className="recourse-content">
            <div className="recourse-detail-step">
              <span className="recourse-detail-step-icon">
                <i className="bi bi-check-lg"></i>
              </span>
              <span className="recourse-detail-step-description">
                İstanbul Kodluyor Başvuru Formu onaylandı.
              </span>
            </div>
            <div className="recourse-detail-step">
              <span className="recourse-detail-step-icon">
                <i className="bi bi-check-lg"></i>
              </span>
              <span className="recourse-detail-step-description">
                İstanbul Kodluyor Belge Yükleme Formu onaylandı.
              </span>
            </div>
          </div>
        </div>
      </div>

      <ShowMoreButton />
    </>
  )
}

export default Recourse