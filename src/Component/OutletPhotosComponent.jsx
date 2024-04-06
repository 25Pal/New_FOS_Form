import React, { lazy, useEffect, useRef, useState } from 'react';
import './Outletphotos.css';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';
import CloseButton from 'react-bootstrap/CloseButton';
import { useMediaQuery } from "react-responsive";

const Outletphotos = ({ saveOutletsPhoto , values, handleChange}) => {
    const isSmallScreen = useMediaQuery({ maxWidth: 698 });

    const [selectedPhotos, setSelectedPhotos] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState([]);
    const [totalUploadProgress, setTotalUploadProgress] = useState(0);
    const inputRef = useRef(null);
    const [imageNames, setImageNames] = useState([]);



    const handlePhotoSelection = (event) => {

        const files = event.target.files;

        console.log("Check selectedPhotos in handlePhotoSelection ---->" , values.outletphotos , files.length)

        if (selectedPhotos.length + files.length > 4) {
            toast.error("Maximum 4 files allowed.");
            return false;
        }


        // Clear the red border style from photosContainer div
        const photosContainerDiv = document.querySelector('.photosContainer');
        photosContainerDiv.style.border = '1px dotted black';

        // Read each selected file
        const selectedImages = [];

        selectedImages.push(...values.outletphotos);

        if(files.length > 4){
            toast.error("Please uplaod 4 files only ");
            return false;
        }


     

        for (let i = 0; i < files.length; i++) {

            const file = files[i];

            const reader = new FileReader();

            reader.onload = (event) => {

                const base64Url = event.target.result;
                const imageData = {
                    name: file.name,
                    dataUrl: base64Url
                };

                selectedImages.push(imageData);
                selectedPhotos.push(imageData);
                imageNames.push(imageData.name);

            

               // If 4 images are selected or all images have been processed, save the photos
            if (selectedImages.length === 4 || i === files.length - 1) {
                saveOutletsPhoto(selectedImages);
            }

            };

            reader.readAsDataURL(file); // Read the selected file as a data URL (base64)
        }

        setTimeout(() => {

            setUploading(true);

        }, 1000);

    };




    // Function to trigger click event of hidden input element
    const handleButtonClick = () => {
        inputRef.current.click();
    };

    // Function to handle file deletion
    const handleDelete = (index) => {
        const updatedPhotos = [...selectedPhotos];
        const upadatedImageNames = [...imageNames];

          // Clear the red border style from photosContainer div
          const photosContainerDiv = document.querySelector('.photosContainer');
          photosContainerDiv.style.border = '1px dotted black';

        console.log("Inside handle delete =---->>", updatedPhotos ,upadatedImageNames , index )


        updatedPhotos.splice(index, 1);
        upadatedImageNames.splice(index, 1);

        console.log("updatedOutletPhotos  before =-------->", values.outletphotos)
        // Remove the corresponding entry from values.outletphotos
    const updatedOutletPhotos = values.outletphotos.filter((photo, i) => i !== index);


        setSelectedPhotos(updatedPhotos);

        setImageNames(upadatedImageNames);

        const updatedUploadProgress = [...uploadProgress];
        updatedUploadProgress.splice(index, 1);
        setUploadProgress(updatedUploadProgress);

         // Update values.outletphotos
    handleChange({
        target: {
            name: 'outletphotos',
            value: updatedOutletPhotos,
        },
    });

    console.log("updatedOutletPhotos  After =-------->", values.outletphotos)



    };

    useEffect(() => {
        console.log("Inside useEffect  selectedPhotos--->", selectedPhotos)
        // console.log("Inside useEffect selectedImages --->", selectedImages)


        if (selectedPhotos.length > 0) {
            // console.log("Inside useEffect --->", selectedPhotos)
            setUploading(false);
        } else {
            setUploading(true);
        }
    }, [selectedPhotos, imageNames]);


   

    return (
        <div className='mainOutlet'>

            <h5 className='heading8 d-flex gap-2'>Photo of the Outlet <h6 className='mt-1' >(Add 4 images only)</h6> </h5>
            <div className={`uplaodbtn-component d-flex ${isSmallScreen ?'flex-column' :''  } justify-content-evenly`} style={{ gap: "1rem", }}>

                <div className='photosContainer' style={{ display: "grid", gap: "3.4rem", border: "1px dotted black", padding: "1rem 1.5rem 1rem 1.5rem", borderRadius: "10px" }}>
                    <div className='uplaod-icon'>
                        <div>
                            <svg width="63" height="41" viewBox="0 0 63 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.5 31.6427V14.9285M31.5 14.9285L23.1818 20.4999M31.5 14.9285L39.8182 20.4999M62 28.857C62 22.703 57.0344 17.7142 50.9091 17.7142C50.8435 17.7142 50.7794 17.7148 50.7141 17.7159C49.3695 8.26517 41.2785 1 31.5 1C23.7456 1 17.0546 5.56866 13.9457 12.1729C6.71754 12.6482 1 18.6887 1 26.0709C1 33.7634 7.20696 40 14.8636 40L50.9091 39.9998C57.0344 39.9998 62 35.011 62 28.857Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className='upd-txt'>
                            Upload your files here
                        </div>

                    </div>
                    <div className='btn-containerr'>
                        <button type='button' style={{ pointerEvents: selectedPhotos.length === 4 ? "none" : "", opacity: selectedPhotos.length === 4 ? "0.5" : "1" }} onClick={handleButtonClick}>Upload Photos</button>
                        <input name='outletPhotos' type='file' accept='image/*' multiple={true} ref={inputRef} style={{ display: 'none' }} onChange={handlePhotoSelection} />
                    </div>
                </div>

               

                {
                    selectedPhotos.length > 0 && (
                        // uploading ?
                            <div className='fileComponent' style={{ display: 'grid', gap: '1rem' }}>

                                {
                                selectedPhotos.map((photo, index) => (

                                    <div className='singleFile' key={index} style={{ position: 'relative', minWidth: '120px', height:"auto" }}>

                                        <div className='fileName'>
                                            <span>{imageNames[index]}</span>
                                        </div>

                                        <button type='button' className='delete-button' onClick={() => handleDelete(index)}>
                                            <CloseButton aria-label="Hide" />
                                        </button>

                                    </div> 

                                ))
                                }
                            </div> 
                            // : <div> <Spinner variant="success" /></div>

                    )}





            </div>



        </div>
    );
};

export default Outletphotos;
