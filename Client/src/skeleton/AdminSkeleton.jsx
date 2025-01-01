import React from 'react';
import Skeleton from 'react-loading-skeleton';

const AdminSkeleton = () => {
    return (
        <div>
            <div>
                <div className="row">
                    <Skeleton count={25}/>
                </div>
            </div>

        </div>
    );
};

export default AdminSkeleton;