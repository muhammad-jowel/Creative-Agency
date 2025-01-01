import React, { useEffect } from 'react';
import BlogStore from '../../store/BlogStore';
import { Link, useParams } from 'react-router-dom';
import { TimestampToDate } from '../../utility/Utility';

const BlogDetails = () => {

    const { BlogListDetails, BlogList, BlogListDetailsRequest } = BlogStore();
    const handleScrollToTop = () => { window.scrollTo({ top: 0, behavior: "smooth" }); };

    const { id } = useParams();

    useEffect(() => {
        (async () => {
            await BlogListDetailsRequest(id);
        })()
    }, [id, BlogListDetailsRequest]);
    

    return (
        <div>
            {
                BlogListDetails?.data?.map((item, index) => {
                    return (
                                    
                        <div  key={index} className='container py-5'>
                            <div className='row'>
                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <div>
                                        <p className='display-6 text-warning'>{item['title']}</p>
                                        <h5 className=''>{item['author']}</h5>
                                        <img className='w-100 mt-4' src={item['img']} alt="" />
                                        <div className='m-0 p-0 d-flex justify-content-between mx-3 mt-2 text-secondary'>
                                            <p>{item.author}</p>
                                            <p>{TimestampToDate(item['createdAt'])}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 col-md-6 col-sm-12'>
                                    <p className='mt-3 text-muted'>{item['fullContent']}</p>
                                </div>
                            </div>
                        </div>
                                    
                    )
                })
            }
            <div>
            <div className="container py-5">
                    <div className='text-center mb-5'>
                        <h2 className="text-warning fw-bold">Related Post</h2>
                        <p className="lead">Stay updated with our latest insights, tips, and trends to help you stay ahead in the industry.</p>
                    </div>
                    <div className="row g-4">
                        {
                            BlogList?.data?.map((item, index) => {
                                return (
                                    <div key={index} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                        <div className="card shadow-sm border-0 mb-4">
                                            <img src={item.img} alt=""/>
                                            <div className="card-body">
                                                <h5 className="card-title">{item['title']}</h5>
                                                <p className="card-text">{item['sortContent']}</p>
                                                <Link to={`/blog-details/${item._id}`} onClick={handleScrollToTop} className="btn btn-warning fw-bold">Read More</Link>
                                            </div>
                                        </div>  
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;