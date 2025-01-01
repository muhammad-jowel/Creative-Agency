import React from 'react';
import MessageStore from '../../store/MessageStore';
import { toast } from 'react-toastify';
import AdminSkeleton from '../../skeleton/AdminSkeleton';

const AdminMessage = () => {


    const { MessageList, MessageListRequest, DeleteMassage} = MessageStore();


    const Delete = async (id) => {
        try {
            await DeleteMassage(id)
            await MessageListRequest()
            toast.success('Delete successfully')
    
        } catch (e) {
            toast.error("Fail to delete")
        }
      };

    return (
        <div>
            <div className="d-flex">
                <div className="flex-grow-1 p-4">
                {/* Header Section */}
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <h2 className='fw-bold text-primary'>All Messages</h2>
                </div>

                {/* Posts Table */}
                <table className="table table-bordered table-hover">
                    <thead className="table-light">
                    <tr>
                        <th>Name</th>
                        <th>Message</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    
                        {
                            MessageList && MessageList.data ? (
                                MessageList?.data?.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item['fullName']}</td>
                                            <td>{item['message']}</td>
                                            <td>{item['email']}</td>
                                            <td>
                                                <button onClick={async ()=>{await Delete(item['_id'])}} className="btn btn-sm btn-danger">
                                                    <i className="bi bi-trash"></i> Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td colSpan="4">
                                        <AdminSkeleton />
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default AdminMessage;