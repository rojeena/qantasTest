import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Pagination from '../commons/Pagination';
import axios from 'axios';
import {URL}  from './../constants/index'
import Header from "./Header";
import Footer from "./Footer";
import '../css/style.css';


const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(50);
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(URL);
            setPosts(res.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <container>
            <Header title={'List of Airports'}/>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
            />
            <Footer/>
        </container>
    );
};

export default Home;