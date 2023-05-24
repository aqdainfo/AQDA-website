import React, { useState } from "react";
import DownloadManager from "./download-manager";

const CitationBox = (props) => {
    const [tooltip, showTooltip] = useState(false);
    const [downloadManager, showDownloadManager] = useState(false);


    const downloadManagerOpen = () => {
        showDownloadManager(true);
    }
    const downloadManagerClose = () => {
        showDownloadManager(false);
    }

    const type = props.type;
    const narratorName = props.data.narratorName;
    const mediaName = props.data.mediaName;
    const interviewerName = props.data.interviewerName;
    const publishedDay = props.data.publishedDay;
    const publishedMonth = props.data.publishedMonth;
    const publishedDate = publishedDay + ' ' + publishedMonth;
    const publishedYear = props.data.publishedYear;
    const accessionDate = props.data.accessionDate;
    const accessionYear = props.data.accessionYear;
    const url = props.data.url;

    const downloadingData = {
        key: props.data.pageTitle,
        author: interviewerName,
        title: mediaName,
        year: publishedYear,
        doi: "10.1136" + props.data.pageTitle,
        abstract: props.data.context,
        url: url
    }

    let citation = narratorName
        + ", '" + mediaName + "', interviewed by "
        + interviewerName
        + ", AQDA [web interview], "
        + publishedDate
        + ' ' + publishedYear
        + ", " + url
        + "(accessed "
        + accessionDate
        + ' ' + accessionYear
        + ").";

    if (type === "Oxford") {
        citation = narratorName
            + ", '" + mediaName + "', interviewed by "
            + interviewerName
            + ", AQDA [web interview], "
            + publishedDate
            + ' ' + publishedYear
            + ", " + url
            + " (accessed "
            + accessionDate
            + ' ' + accessionYear
            + ").";
    } else if (type === "Harvard") {
        citation = narratorName
            + " (" + publishedYear
            + "). '" + mediaName + "'. Interviewed by "
            + interviewerName
            + ". AQDA. "
            + publishedDate
            + ". Available at: "
            + url
            + "(Accessed:"
            + accessionDate
            + ").";

    }

    else if (type === "Uniform") {
        citation = narratorName
            + ". '" + mediaName + ",'. Interviewed by "
            + interviewerName
            + ", ("
            + publishedDate
            + ' ' + publishedYear
            + "), online: .";

    }
    else if (type === "AMA") {
        citation = narratorName
            + ". " + mediaName + ". AQDA. Interviewed by "
            + interviewerName
            + ". Published " + publishedDate + ", " + publishedYear
            + ". Accessed "
            + accessionDate + ', ' + accessionYear
            + ". " + url;
    }

    else if (type === "APA") {
        citation = narratorName
            + " (" + publishedYear + ', ' + publishedMonth
            + ' ' + publishedDay + '). '
            + mediaName + ". Interviewed by "
            + interviewerName
            + ". AQDA. " + url;
    }
    else if (type === "AGCL") {
        citation = narratorName
            + ", '" + mediaName + "', AQDA, interviewed by "
            + interviewerName
            + " (Interview, " + publishedDate + " " + publishedYear
            + ") "
            + "<" + url
            + "/>";
    }


    const copyCitationHandler = () => {
        navigator.clipboard.writeText(citation);
        showTooltip(true);
        setTimeout(() => {
            showTooltip(false);
        }, 2000);
    }
    return (
        <React.Fragment>
       {downloadManager && <DownloadManager closeFunction={downloadManagerClose} data={downloadingData} /> }
        <div className='citation-box'>
            <div className='preview--mob'>
                Preview
            </div>
            <div className='citation-box__inner'>
                <div className='citation-box__title'>
                    <h2>{props.type}</h2>
                </div>
                <div className='citation-box__content'>
                    <div className='citation-row'>
                        <h4>Page Title</h4>
                        <p className='p3 page-title'>{props.data.pageTitle}</p>
                    </div>
                    <div className='citation-row'>
                        <h4>Website Name</h4>
                        <p className='p3 website-name'>AQDA</p>
                    </div>
                    <div className='citation-row'>
                        <h4>Website Adress</h4>
                        <p className='p3 website-address'>www.aqda.com</p>
                    </div>
                    <div className='citation-row'>
                        <h4>Last Accessed</h4>
                        <p className='p3 last-accessed'>{accessionDate} {accessionYear}</p>
                    </div>
                    <div className='citation-row'>
                        <h4>Date Published</h4>
                        <p className='p3 date-published'>{publishedDate}</p>
                    </div>
                    <div className='citation-row'>
                        <h4>Year Published</h4>
                        <p className='p3 year-published'>{publishedYear}</p>
                    </div>
                </div>
            </div>
            <div className="citation-box__actions">
            <div className='preview--desk'>
                Preview
            </div>
                <div className='citation-box__buttons'>
                    <div className="wrap">
                        {tooltip && <p className="citation-box__tooltip">Copied!</p>}
                        <button className='btn btn--citation-action btn--black btn--copy' 
                            onClick={copyCitationHandler}>Copy</button>
                        <button className='btn btn--citation-action btn--black btn--download'
                        onClick={downloadManagerOpen}>Download</button>
                    </div>
                    <button className='btn btn--citation-action btn--black btn--cancel'
                    onClick={downloadManagerClose}>Cancel</button>
                </div>
            </div>

        </div>
        </React.Fragment>
    );
}
export default CitationBox;