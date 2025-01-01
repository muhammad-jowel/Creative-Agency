import React, { useState } from 'react';
import TeamStore from '../../store/TeamStore';
import TeamSkeleton from '../../skeleton/TeamSkeleton';

const Team = () => {
    const { TeamList } = TeamStore();
    const [currentPage, setCurrentPage] = useState(1); // State for the current page
    const itemsPerPage = 8; // Number of items to display per page

    if (!TeamList) {
        return <TeamSkeleton />;
    }

    // Calculate pagination details
    const totalItems = TeamList?.data?.length || 0;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = TeamList?.data?.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-12 text-center mb-4">
                    <h2 className="fw-bold text-warning">Meet Our Team</h2>
                    <p className="lead">The talented individuals behind our success</p>
                </div>

                {paginatedItems?.map((item, index) => (
                    <div key={index} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12 text-center mb-4">
                        <div className="card border-0 shadow-sm">
                            <img src={item.img} className="card-img-top" alt={item.name} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="text-muted">{item.designation}</p>
                                <p>{item.bio}</p>
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
    );
};

export default Team;
