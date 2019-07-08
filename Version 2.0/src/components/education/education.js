import React from 'react';
import './education.css';
import NEIULogo from '../../images/neiulogo.png';
import CodecademyLogo from '../../images/codecademy.png';


class Education extends React.Component {
    render() {
        return(
            <React.Fragment>
                <p className="e-title">Education</p>
                <img src={NEIULogo} alt="university logo" className="e-img"/>
                <p className="e-desc">Bachelor’s in Computer Science Degree<br/>
                   Expected graduation on May 2021
                </p>
                <img src={CodecademyLogo} alt="online course logo" className="e-img"/>
                <p className="e-desc">
                    Web development path course, C++ and C# course
                </p>
            </React.Fragment>
        );
    }
}

export default Education;