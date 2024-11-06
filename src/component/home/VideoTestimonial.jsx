import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import { MdPlayCircle } from 'react-icons/md';

// Ensure accessibility for the modal
Modal.setAppElement('#root'); // Use '#root' if this is a standard React project

const VideoTestimonial = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Open modal with the selected video
    const openModal = (videoId) => {
        setSelectedVideo(videoId);
        setModalIsOpen(true);
    };

    // Close modal
    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedVideo(null);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // List of YouTube video IDs
    const videos = [
        { id: 'dQw4w9WgXcQ', title: 'Video 1' },
        { id: '9bZkp7q19f0', title: 'Video 2' },
        { id: '3JZ_D3ELwOQ', title: 'Video 3' },
    ];

    return (
        <div className="relative custom_container">
            <Slider {...settings}>
                {videos.map((video) => (
                    <div key={video.id} className="relative mb-10 sm:px-4">
                        <div className="relative">
                            <img 
                                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                                className="rounded-xl overflow-hidden w-full" 
                                alt={`Video Thumbnail`} 
                            />
                            {/* Play button overlay */}
                            <MdPlayCircle 
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl cursor-pointer"
                                onClick={() => openModal(video.id)}
                            />
                        </div>
                        <h3 className="font-semibold text-xl mt-4 text-center">{video.title}</h3>
                    </div>
                ))}
            </Slider>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Watch Video"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg"
                overlayClassName="fixed inset-0 bg-black bg-opacity-75"
            >
                <button onClick={closeModal} className="absolute top-2 right-2 text-2xl">✖</button>
                {selectedVideo && (
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${selectedVideo}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="YouTube video"
                    ></iframe>
                )}
            </Modal>
        </div>
    );
};

export default VideoTestimonial;
