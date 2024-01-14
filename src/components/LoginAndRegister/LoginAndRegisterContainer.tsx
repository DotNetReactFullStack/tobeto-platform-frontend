import React from 'react'
import "./LoginAndRegisterContainer.css"

type Props = {
    childComponent: React.FC;
}

const LoginAndRegisterContainer = (props: Props) => {
    return (
        <div className="login-and-register-container">
            <div className="login-and-register-container-background">
                <div className="login-and-register-container-content">
                    <div className="login-and-register-container-content-header">
                        <a className="login-and-register-container-content-logo" href="#">
                            <img
                                src={process.env.PUBLIC_URL + "/assets/images/tobeto-logo.png"}
                                alt="Tobeto Logo"
                            />
                        </a>
                    </div>
                    <props.childComponent />
                </div>
            </div>
        </div>
    )
}

export default LoginAndRegisterContainer