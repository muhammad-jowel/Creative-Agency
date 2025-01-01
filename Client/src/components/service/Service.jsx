import React, { useState } from 'react';
import ServiceSkeleton from '../../skeleton/ServiceSkeleton';
import ServiceStore from '../../store/ServiceStore';

const Service = () => {
    const { ServiceList } = ServiceStore();
    const [currentPage, setCurrentPage] = useState(1); // State for the current page
    const itemsPerPage = 8; // Number of items per page

    if (!ServiceList) {
        return <ServiceSkeleton />;
    }

    // Pagination calculations
    const totalItems = ServiceList?.data?.length || 0;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = ServiceList?.data?.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <section className="service-section py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-warning">Our Services</h2>
                        <p className="lead">
                            We provide a range of creative and professional services tailored to help your business
                            thrive in today's competitive market.
                        </p>
                    </div>
                    <div className="row g-4">
                        {paginatedItems?.map((item, index) => (
                            <div key={index} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                <div className="card h-100 shadow border-0">
                                    <img src={item['img']} className="card-img-top rounded-top" alt={item['title']} />
                                    <div className="card-body">
                                        <h5 className="card-title text-warning">{item['title']}</h5>
                                        <p className="card-text">{item['description']}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination (hidden if totalItems < 9) */}
                    {totalItems > itemsPerPage && (
                        <div className="row mt-4">
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
            </section>
        </div>
    );
};

export default Service;
