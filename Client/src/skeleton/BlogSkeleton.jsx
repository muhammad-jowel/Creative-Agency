import Lottie from 'lottie-react';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import ImagePlaceholder from '../assets/image/image.json'

const BlogSkeleton = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    {
                        Array.from({length:4}).map((_, i) => {
                            return (
                                <div key={i} className="col-md-3 p-2 col-lg-3 col-sm-6 col-12">
                                    <div className="card shadow-sm h-100 rounded-3 bg-white">
                                        <Lottie className="w-100" animationData={ImagePlaceholder} loop={true}/>
                                        <div className="card-body">
                                            <Skeleton count={3}/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default BlogSkeleton;