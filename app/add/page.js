'use client'

import React from 'react'

import { useState, useEffect } from 'react'

const Page = () => {

    const [postObject, setPostObject] = useState({});
    const [newPost, setNewPost] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)


    const handleInputChange = (event) => {
        setPostObject({
            ...postObject,
            [event.target.name]: event.target.value,
        })
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        if (!postObject.username || !postObject.title || !postObject.review) {
            setIsError(true)
            setTimeout(() => {
                setIsError(false);
            }, 3000);
            return;
        }

        setNewPost((prevPost) => {
            const updatedPosts = [...prevPost, postObject];
            localStorage.setItem('posts', JSON.stringify(updatedPosts));

            return updatedPosts;
        });

        setIsSuccess(true);
        setTimeout(() => {
            setIsSuccess(false)
        }, 3000)
        setPostObject({
            title: '',
            username: '',
            review: '',
            img: '',
            description: ''
        });



    }


    // setMovies((prevMovies) => {
    //     const updatedMovies = [...prevMovies, movieObject];
    //     localStorage.setItem('movies', JSON.stringify(updatedMovies));
    //     return updatedMovies;
    // });
    // setIsSuccess(true);
    // setMovieObject({
    //     title: '',
    //     opinion: '',
    //     watched: false,
    //     img: '',
    // });


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (!movieObject.title || !movieObject.opinion) {
    //         console.log("there is an error");
    //         setIsError(true);
    //         setTimeout(() => {
    //             setIsError(false);
    //         }, 3000);
    //         return;
    //     }



    return (
        <div className='p-4'>
            <div>
                <h1
                    className='text-2xl font-bold text-yellow-500'>Submit A Review!</h1>
            </div>

            {isError && (<p className='text-red-500'>Please fill in all fields</p>)}
            <form className='mt-10 flex flex-col gap-10 w-1/2'
                onSubmit={handleSubmit}
            >
                <input placeholder='Username' name="username"
                    onChange={handleInputChange}
                    value={postObject.username} />
                <input placeholder='Movie Title' name="title"
                    onChange={handleInputChange}
                    value={postObject.title}
                />
                <input placeholder='Movie Description' name='description'
                    onChange={handleInputChange}
                    value={postObject.description}
                />

                <input placeholder='Insert an Image Link' name="img"
                    onChange={handleInputChange}
                    value={postObject.img}
                />


                <textarea placeholder='Write a Review!' name="review"
                    onChange={handleInputChange}
                    value={postObject.review}
                />
                <button type='submit' className='bg-blue-500 text-white p-2 rounded-md'
                // disabled={isError}
                >Add movie</button>
            </form>
        </div>

    )}

export default Page