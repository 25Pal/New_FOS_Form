import React, { useEffect, useRef, useState } from 'react';
import './CameraComponent.css';
import { useMediaQuery } from "react-responsive";
const CameraComponent = ({ onPhotoCapture }) => {
    const isSmallScreen = useMediaQuery({ maxWidth: 571 });
    const [photo, setPhoto] = useState(null);

    const [showFrame, setShowFrame] = useState(false);

    const [showOpenCamBtn , setShowOpenCamBtn]=useState(true);
    const [showClickBtn, setShowClickBtn]=useState(false);
    const [showUploadBtn , setShowUplaodBtn]=useState(false);
    const [showUploadDone , setShowUploadDone] = useState(false);




    const [showClickedPhoto, setShowClickedPhoto] = useState(false)

    const videoRef = useRef();

    // Function to handle capturing a photo
    const handleCapturePhoto = async () => {
        try {
            setShowFrame(true)
            setShowOpenCamBtn(false)
            setShowUplaodBtn(false)
            setShowUploadDone(false);
            setShowClickBtn(true)
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });

            // Display the camera feed in a video element
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
                videoRef.current.play();
            }

        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };



    const capturePhoto = () => {
        if (videoRef.current) {
            const canvas = document.createElement('canvas');
            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
            const capturedPhoto = canvas.toDataURL('image/jpeg');
            setPhoto(capturedPhoto);
            setShowFrame(true)
            setShowClickedPhoto(true);
            setShowUplaodBtn(true);
            setShowUploadDone(false);

            
            setShowOpenCamBtn(false);
            setShowClickBtn(false);

            stopVideoStream();
        }
    };

    const stopVideoStream = () => {

        const stream = videoRef.current.srcObject;

        if (stream) {

            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());

        }
    };

    const handleUploadPhoto = () => {

        onPhotoCapture(photo);
        setShowFrame(true)
        setShowClickedPhoto(true);
        setShowClickBtn(false);
        setShowOpenCamBtn(false);
        setShowUplaodBtn(false);
        setShowUploadDone(true);

    };

    const handleCancelPhoto= ()=>{
        setPhoto(null);
        setShowFrame(true);

        setShowClickBtn(true);

        setShowClickedPhoto(false);
        setShowUplaodBtn(false);
        handleCapturePhoto();


    }

    useEffect(()=>{
        console.log("videoRef", videoRef);
    })
 

    return (
        <div className='mainOutlet'>

            <h5 className='heading8'>Photo of the owner</h5>
            <div className='childCamera-component'>
                {
                    !showClickedPhoto ?
                        <div className="video-container" style={{ display: showFrame ? "flex" : "none" }}  >
                            <video style={{  width: `${isSmallScreen ? '100%':'auto'}` ,transform: "scaleX(-1)" }} ref={videoRef}></video>
                        </div> :
                        <div className="photo-container" style={{ display: showFrame ? "flex" : "none" , width: `${isSmallScreen ? '100%':'auto'}`  }}  >
                            {photo && showClickedPhoto === true ? <img src={photo} alt="Captured"  style={{transform: "scaleX(-1)" ,width: `${isSmallScreen ? '100%':'auto'}`}}/> : ''}
                        </div>
                }

                <div className='btn-container'>
                    {
                        <button type='button'  style={{ display: showOpenCamBtn ? "block" : "none" }} onClick={handleCapturePhoto}>
                            <span >Use Camera </span>  
                        <svg width="18" height="15" style={{marginLeft:"10px", marginBottom:"5px"}} viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.76798 3.6H3.84462C2.84897 3.6 2.35077 3.6 1.97049 3.78892C1.63598 3.9551 1.36421 4.22008 1.19377 4.54622C1 4.917 1 5.40275 1 6.3735V11.2268C1 12.1976 1 12.6823 1.19377 13.0531C1.36421 13.3792 1.63598 13.6451 1.97049 13.8113C2.3504 14 2.84799 14 3.8417 14H14.1583C15.152 14 15.6489 14 16.0288 13.8113C16.3633 13.6451 16.636 13.3792 16.8064 13.0531C17 12.6827 17 12.1982 17 11.2293V6.37066C17 5.40179 17 4.91664 16.8064 4.54622C16.636 4.22008 16.3633 3.9551 16.0288 3.78892C15.6485 3.6 15.1514 3.6 14.1557 3.6H11.2318M6.76798 3.6H6.82292M6.76798 3.6C6.77912 3.6 6.79083 3.6 6.80317 3.6L6.82292 3.6M6.76798 3.6C6.67365 3.59996 6.62079 3.59949 6.57899 3.59492C6.0567 3.53791 5.69847 3.0532 5.80816 2.55206C5.81837 2.50542 5.83854 2.44642 5.87849 2.32957L5.88021 2.32463C5.92583 2.19117 5.94865 2.12444 5.97385 2.06556C6.23188 1.4627 6.81619 1.05272 7.48438 1.00469C7.54964 1 7.62134 1 7.76563 1H10.2343C10.3786 1 10.4509 1 10.5161 1.00469C11.1843 1.05272 11.768 1.4627 12.026 2.06556C12.0512 2.12444 12.0742 2.1911 12.1198 2.32454C12.1609 2.44473 12.1814 2.50484 12.1918 2.55214C12.3015 3.05328 11.9438 3.53791 11.4215 3.59492C11.3797 3.59949 11.3263 3.59996 11.2318 3.6M6.82292 3.6H11.1769M11.1769 3.6H11.2318M11.1769 3.6L11.1966 3.6C11.209 3.6 11.2207 3.6 11.2318 3.6M9 11.4C7.52724 11.4 6.33333 10.2359 6.33333 8.8C6.33333 7.36406 7.52724 6.2 9 6.2C10.4728 6.2 11.6667 7.36406 11.6667 8.8C11.6667 10.2359 10.4728 11.4 9 11.4Z" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        </button>
                    }
                    {
                        <button type='button' style={{ display: showClickBtn ? "block" : "none" }} onClick={capturePhoto}>Click Photo</button>
                    }
                    {
                        <button type='button' style={{ display: showUploadBtn ? "block" : "none"  , background:"#28A745"}} onClick={handleUploadPhoto}>Upload Photo</button>
                    }
                    {/* {
                        <button type='button' style={{ display: photo && showClickedPhoto === true ?  "block" : "none"  , background:"#28A745"}} onClick={handleUploadPhoto}>Upload Done</button>
                    } */}
                    {
                        <button type='button' style={{ display: showUploadDone ?   "flex" : "none" , gap:"10px" , alignItems:"center", justifyContent:"center" , background:"#28A745"}} >Upload Done 
                        <i class="bi bi-check-circle"   style={{ fontSize: '20px' }}  ></i>
                        </button>
                    }
                    
                    {
                        <button type='button' style={{ display:  showUploadDone ||showUploadBtn   ? "block" : "none",background:"none" , color:"#000"  , border:"1px solid black"}} onClick={handleCancelPhoto}>Retake</button>
                    }
                   
                </div>
            </div>
        </div>
    );
};

export default CameraComponent;
