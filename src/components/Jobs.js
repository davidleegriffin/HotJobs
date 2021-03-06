import React from 'react'
import './Jobs.css'

function Jobs(props) {
    let emp = props.props.employerName__A;
    let jobTitle = props.props.jobTitle__B;
    let locale = props.props.jobLocation__C;
    let jobLink = props.props.jobUrl__D;
    let company = emp.replace(/(\d+)(\S?)(\s)(\d?)(reviews)/, "");
    // console.log('company', company);
    return (
        <div className="jobs__container--main">
            <div className="jobs__container--card">
                <div className="jobs__container--header">{company}</div>
                <div className="jobs__container--title">{jobTitle}</div>
                <div className="jobs__container--locale">{locale}</div>
                <div className="jobs__container--link">
                    <a href={`${jobLink}`} target='_blank' referrer='none'><button>Open Link in New Window</button></a>
                </div>
            </div>
        </div>
    )
}

export default Jobs;