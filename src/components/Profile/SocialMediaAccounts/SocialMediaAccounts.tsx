import React from 'react'
import './SocialMediaAccounts.css'
import SocialMediaAccountElement from './SocialMediaAccountElement';

type Props = {
    data: any[];
}

const SocialMediaAccounts = (props: Props) => {
    return (
        <div className='social-media-accounts'>
            {
                props.data.map((account, index) => (
                    <SocialMediaAccountElement key={index} iconClass={account.iconClass} iconColor={account.iconColor} link={account.link} />
                ))
            }
        </div>
    )
}

export default SocialMediaAccounts