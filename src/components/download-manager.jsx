const DownloadManager = () => {
    return (
        <div className="download-manager__popup">
            <div className="download-manager__inner">
                <div className="download-manager--close">
                    <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9261 18.6072L0.215286 36.2654L0.950104 36.998L18.6609 19.3398L36.3735 36.9997L37.1083 36.2671L19.3958 18.6072L37.3236 0.732635L36.5887 0L18.6609 17.8745L0.734817 0.00169661L0 0.73433L17.9261 18.6072Z" fill="#191718" />
                    </svg>

                </div>
                <h4 className="download-manager__subtitle">Download Citation</h4>
                <h3 className="download-manager__title">Dowload this article to citation manager</h3>
                <div className="download-manager__copy">
                    <p>Lorem ipsum dolor sit amet, ad pro delenit tacimates omittantur. Quo id quem reque choro, iusto omnium delectus eam et. Te decore aliquam imperdiet vim, vix ea veri nullam ornatus, vel modo diceret insolens an.</p>
                </div>
                <div className="download-manager__files">
                    <div className="download-manager__file">
                        <h4 className="download-manager__file-name">BibTeX (win & mac)</h4>
                        <button className="btn btn--white">Download</button>
                    </div>
                    <div className="download-manager__file">
                        <h4 className="download-manager__file-name">EndNote (tagged)</h4>
                        <button className="download-manager__file-button btn btn--white">Download</button>
                    </div>
                    <div className="download-manager__file">
                        <h4 className="download-manager__file-name">EndNote 8 (xml)</h4>
                        <button className="download-manager__file-button btn btn--white">Download</button>
                    </div>
                    <div className="download-manager__file">
                        <h4 className="download-manager__file-name">RefWorks Tagged (win & mac)</h4>
                        <button className="download-manager__file-button btn btn--white">Download</button>
                    </div>
                    <div className="download-manager__file">
                        <h4 className="download-manager__file-name">RIS (win only)</h4>
                        <button className="download-manager__file-button btn btn--white">Download</button>
                    </div>
                    <div className="download-manager__file">
                        <h4 className="download-manager__file-name">Medlars</h4>
                        <button className="download-manager__file-button btn btn--white">Download</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default DownloadManager;