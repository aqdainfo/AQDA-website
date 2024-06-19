import { useState, useEffect } from 'react';

const Popup = () => {
    const [visible, setVisible] = useState(false);
        useEffect(()=>{
          let popupStatus = localStorage.getItem('popupStatus');
          if(!popupStatus || !popupStatus == null){
            console.log(popupStatus)
            setVisible(true);
            localStorage.setItem('popupStatus',1);
          } 
        },[]);
        if(!visible) return null;

        const closePopup = () => {
            setVisible(false);
            localStorage.setItem('popupStatus',1);
        }

        

    return (
        <div className="popup">
            <div className="popup__inner">
                <div className="popup__intro">
                    <div className="popup__title">
                        <h1>Welcome to our website,</h1>
                    </div>
                    <button className="btn btn--pink popup--close popup-btn--desk" onClick={closePopup}>
                        Enter AQDA
                    </button>
                </div>
                <div className="popup__copy">
                    <p className='p1'>Where we aim to provide you with a diverse range of interviews and stories that can be informative, inspiring, and thought-provoking. However, we want to acknowledge that some of the content you may encounter could be upsetting or distressing.</p>
                    <p className='p1'>Each person’s story is unique, and their truth is valid and deserves to be respected. We ask that you approach each interview with empathy and understanding and recognise that sharing one’s story takes courage and vulnerability.</p>
                    <p className='p1'>We encourage you to care for yourself as you navigate our website. If you find yourself feeling overwhelmed or triggered by any of the content, please know that it is okay to take a break and reach out for support.</p>
                    <p className='p1'>Thank you for being a respectful and compassionate member of our community, and we hope you find value in the stories shared on our platform.”
                    </p>
                </div>
                <button className="btn btn--pink popup--close popup-btn--mob" onClick={closePopup}>
                    Enter AQDA
                </button >
            </div>
        </div>
   
    )
}
export default Popup;