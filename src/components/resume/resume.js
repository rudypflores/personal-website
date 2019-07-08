import React from 'react';
import './resume.css';


class Resume extends React.Component {
    render() {
        return (
            <React.Fragment>
                <p className="r-title">Resume</p>
                <p className="r-desc">
                    For security reasons, my resume is given upon request.
                    Furthermore, if you wish to view my resume for more
                    information about me please email me at
                    <span className="r-email"> rudypichola@gmail.com </span>
                     and I will respond to you within
                    a 24 hour period upon the email being sent. Thank you!
                </p>
            </React.Fragment>
        );
    }
}

export default Resume;