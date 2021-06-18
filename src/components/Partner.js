import React from 'react'
import './Partner.css';

function Partner(props) {
    console.log(props);

    let alert = (props.props.Alert__A) ? props.props.Alert__A : "";
    let deadline = props.props.Deadline__B;
    let aaForm = props.props.AAForm__C;
    let company = (props.props.Company__D) ? props.props.Company__D : "";
    let location = props.props.Location__E;
    let description = props.props.Description__F;
    return (
        <div className="partner__container--main">
            <div className="partner__container--card">
                <div className="partner__container--alert">{alert}</div>
                <div className="partner__container--deadline"><u>DEADLINE</u> : {deadline}</div>
                <div className="partner__container--company">
                    <a href={`${props.props.Website__G}`} target="blank" referrer='none'>{`${company}`}</a>
                    <div className="partner__container--location">{location}</div>
                    <div className="partner__container--description">{description}</div>
                </div>
                <div className="partner__container--link">
                    <a href={`${aaForm}`} target='blank' referrer='none'><button className="partner__button--form">Open AA Form in New Window</button></a>
                </div>
            </div>
        </div>
    )
}

export default Partner;