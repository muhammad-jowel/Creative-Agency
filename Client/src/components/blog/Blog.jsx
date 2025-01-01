import React, { useState } from 'react';
import BlogSkeleton from '../../skeleton/BlogSkeleton';
import BlogStore from '../../store/BlogStore';
import { Link } from 'react-router-dom';
import { TimestampToDate } from '../../utility/Utility';

const Blog = () => {
    const { BlogList } = BlogStore();
    const [currentPage, setCurrentPage] = useState(1); // State for the current page
    const itemsPerPage = 8; // Number of items per page

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!BlogList) {
        return <BlogSkeleton />;
    }

    // Calculate pagination details
    const totalItems = BlogList?.data?.length || 0;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = BlogList?.data?.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h2 className="text-warning fw-bold">Our Latest Blog Posts</h2>
                    <p className="lead">
                        Stay updated with our latest insights, tips, and trends to help you stay ahead in the industry.
                    </p>
                </div>
                <div className="row g-4">
                    {paginatedItems?.map((item, index) => (
                        <div key={index} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                            <div className="card shadow-sm border-0 mb-4">
                                <img src={item.img} className="card-img-top rounded-top" alt="" />
                                <div className="m-0 p-0 d-flex justify-content-between mx-3 mt-2 text-secondary">
                                    <p>{item.author}</p>
                                    <p>{TimestampToDate(item.createdAt)}</p>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-warning m-0 p-0">{item.title}</h5>
                                    <p className="card-text">{item.sortContent}</p>
                                    <Link
                                        to={`/blog-details/${item._id}`}
                                        onClick={handleScrollToTop}
                                        className="btn btn-warning fw-bold"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination - Hidden if totalItems < 9 */}
                {totalItems > itemsPerPage && (
                    <div className="row">
                        <div className="col-12">
                            <nav>
                                <ul className="pagination justify-content-center">
                                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                        <button
                                            className="page-link"
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            disabled={currentPage === 1}
                                        >
                                            Previous
                                        </button>
                                    </li>
                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <li
                                            key={i}
                                            className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                                        >
                                            <button
                                                className="page-link"
                                                onClick={() => handlePageChange(i + 1)}
                                            >
                                                {i + 1}
                                            </button>
                                        </li>
                                    ))}
                                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                        <button
                                            className="page-link"
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                        >
                                            Next
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;
