import React, { useState, useEffect } from "react";
import { renderToStaticMarkup } from 'react-dom/server';
import { jsonToBibtex } from "@devisle/reference-js";
import { toXML } from 'jstoxml';


const DownloadManager = (props) => {

    const pageTitle = props.data.key;
    const author = props.data.author;
    const title = props.data.title;
    const year = props.data.year;
    const doi = props.data.doi;
    const abstract = props.data.abstract;
    const url = props.data.url;

    const record = {
        author: props.data.author,
        title: props.data.title,
        year: props.data.year,
        interviewee: props.data.interviewee,
        websiteId: '123',
        url: props.data.url,
        accessedDate: props.data.accessedDate,
        publishedDate: props.data.publishedDate
    }

    const generateRIS = (record) =>
        `
TY  - MULTI
AU  - ${record.author}
TI  - ${record.title}
PB  - AQDA
PY  - ${record.year}
CY  - AQDA
ID  - ${record.websiteId}
UR  - ${record.url} 
Y2  - ${record.accessedDate}
ER  -
`.trim();

    const generateEndnote = (record) =>
        `
%0 Online Multimedia
%A ${record.author}
%T ${record.title}
%C AQDA
%D ${record.year}
%E ${record.interviewee}
%I AQDA
%N ${record.websiteId}
%U ${record.url}
%[ ${record.accessedDate}
`.trim()

    const generateRefworks = (record) =>
        `
RT Web Page
SR Electronic(1)
A1 ${record.author}
T1 ${record.title}
PP AQDA
YR ${record.year}
UL ${record.url}
FD ${record.accessedDate}
`.trim()

    const generateMedlars = (record) => `
PT Web Page
AU ${record.author}
TI ${record.title}
TA AQDA
YR ${record.year}
SO AQDA
4100 ${record.url}
FD ${record.accessedDate}
`.trim();

    const content = {
        references: [
            {
                type: "ARTICLE",
                key: "interview" + pageTitle,
                author: "Rene",
                title: title,
                year: year,
                website: "AQDA",
                'elocation-id': pageTitle,
                doi: doi,
                volume: 1,
                publisher: "AQDA",
                abstract: abstract,
                url: url,
            },
        ]
    };

    const xmlContent = {
        _name: 'xml',
        _content: {
            _name: 'records',
            _content: {
                record: [
                    {
                        _name: 'source-app',
                        _content: 'Wordpress',
                        _attrs: {
                            name: 'Wordpress',
                            version: '1.1'
                        },
                    },
                    {
                        _name: 'ref-type',
                        _content: '17',
                        _attrs: {
                            name: 'Website Article',
                        }
                    },
                    {
                        _name: 'contributors',
                        _content: {
                            _name: 'authors',
                            _content: [
                                {
                                    _name: 'style',
                                    _attrs: {
                                        face: 'normal',
                                        font: 'default',
                                        size: '100%',

                                    },
                                    _content: {
                                        _name: 'author',
                                        _content: author
                                    }
                                }
                            ],
                        }
                    },
                    {
                        _name: 'titles',

                        _content: [
                            {
                                _name: 'style',
                                _attrs: {
                                    face: 'normal',
                                    font: 'default',
                                    size: '100%',

                                },
                                _content: {
                                    _name: 'title',
                                    _content: title
                                }
                            },
                            {
                                _name: 'style',
                                _attrs: {
                                    face: 'normal',
                                    font: 'default',
                                    size: '100%',

                                },
                                _content: {
                                    _name: 'secondary-title',
                                    _content: 'AQDA'
                                }
                            }
                        ]
                    },
                    {
                        _name: 'dates',
                        _content: [
                            {
                                _name: 'style',
                                _attrs: {
                                    face: 'normal',
                                    font: 'default',
                                    size: '100%',

                                },
                                _content: {
                                    _name: 'year',
                                    _content: year
                                }
                            },
                            {
                                _name: 'style',
                                _attrs: {
                                    face: 'normal',
                                    font: 'default',
                                    size: '100%',

                                },
                                _content: {
                                    _name: 'pub-dates',
                                    _content: {
                                        _name: 'date',
                                        _content: '2022-04-19 09:16:16'
                                    }
                                }
                            }
                        ]
                    },
                    {
                        _name: 'style',
                        _attrs: {
                            face: 'normal',
                            font: 'default',
                            size: '100%',

                        },
                        _content: {
                            _name: 'elocation-id',
                            _content: pageTitle,
                        }
                    },
                    {
                        _name: 'style',
                        _attrs: {
                            face: 'normal',
                            font: 'default',
                            size: '100%',

                        },
                        _content: {
                            _name: 'doi',
                            _content: doi,
                        }
                    },
                    {
                        _name: 'style',
                        _attrs: {
                            face: 'normal',
                            font: 'default',
                            size: '100%',

                        },
                        _content: {
                            _name: 'volume',
                            _content: '1',
                        }
                    },
                    {
                        _name: 'style',
                        _attrs: {
                            face: 'normal',
                            font: 'default',
                            size: '100%',

                        },
                        _content: {
                            _name: 'issue',
                            _content: '',
                        }
                    },
                    {
                        _name: 'style',
                        _attrs: {
                            face: 'normal',
                            font: 'default',
                            size: '100%',

                        },
                        _content: {
                            _name: 'abstract',
                            _content: abstract,
                        }
                    }

                ]
            }
        }
    };
    const config = {
        header: true,
        indent: '    '
    };
    const xmlFile = toXML(xmlContent, config);

    const [example, setExample] = useState("");


    useEffect(() => {
        jsonToBibtex(JSON.stringify(content), "references")
            .then(data => setExample(data))
            .catch(error => setExample(error.message));
    }, []);

    // TODO are these used, they look wrong?
    const downloadXmlFile = () => {
        const el = React.createElement("animal", { type: "guinea pig", name: "Sparkles" });
        renderToStaticMarkup(el);


        const file = new Blob([xmlFile], { type: 'text/xml' });

        const element = document.createElement("a");
        element.href = URL.createObjectURL(file);
        element.download = title + ".xml";

        // simulate link click
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }

    const downloadBibtexFile = () => {
        //const _ = jsonToBibtex(JSON.stringify(content), "references");
        const file = new Blob([example], { type: 'application/x-bibtex' });
        //const file = '';
        const element = document.createElement("a");
        element.href = URL.createObjectURL(file);
        element.download = title + ".bib";

        // simulate link click
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }


    const downloadFile = (content, name) => {
        const element = document.createElement("a");
        const file = new Blob([content], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = name;
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        element.parentNode?.removeChild(element);

    }





    const downloadManagerClose = props.downloadManagerClose;
    return (
        <div className="download-manager__popup">
            <div className="download-manager__inner">
                <div className="download-manager--close" onClick={downloadManagerClose}>
                    <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.9261 18.6072L0.215286 36.2654L0.950104 36.998L18.6609 19.3398L36.3735 36.9997L37.1083 36.2671L19.3958 18.6072L37.3236 0.732635L36.5887 0L18.6609 17.8745L0.734817 0.00169661L0 0.73433L17.9261 18.6072Z" fill="#191718" />
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
                        <button className="btn btn--white" onClick={downloadBibtexFile}>Download</button>
                    </div>
                    <div className="download-manager__file">
                        <h4 className="download-manager__file-name">EndNote (tagged)</h4>
                        <button className="download-manager__file-button btn btn--white" onClick={() => downloadFile(generateEndnote(record), `${props.data.title}.enw`)}>Download</button>
                    </div>
                    <div className="download-manager__file">
                        <h4 className="download-manager__file-name">EndNote 8 (xml)</h4>
                        <button className="download-manager__file-button btn btn--white" onClick={downloadXmlFile}>Download</button>
                    </div>
                    <div className="download-manager__file">
                        <h4 className="download-manager__file-name">RefWorks Tagged (win & mac)</h4>
                        <button className="download-manager__file-button btn btn--white" onClick={() => downloadFile(generateRefworks(record), `${props.data.title}.txt`)}>Download</button>
                    </div>
                    <div className="download-manager__file">
                        <h4 className="download-manager__file-name" >RIS (win only)</h4>
                        <button className="download-manager__file-button btn btn--white" onClick={() => downloadFile(generateRIS(record), `${props.data.title}.ris`)}>
                            Download</button>
                    </div>
                    <div className="download-manager__file">
                        <h4 className="download-manager__file-name">Medlars</h4>
                        <button className="download-manager__file-button btn btn--white" onClick={() => downloadFile(generateMedlars(record), `${props.data.title}.medlars`)}>Download</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default DownloadManager;