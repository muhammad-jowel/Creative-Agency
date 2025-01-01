import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import BlogStore from '../../store/BlogStore';
import { toast } from 'react-toastify';
import AdminSkeleton from '../../skeleton/AdminSkeleton';

const AdminBlog = () => {

  const { BlogList, CreateBlogFormValue, CreateBlogFormOnChange, CreateBlogRequest, DeleteBlog, BlogListRequest, UpdateBlogRequest } = BlogStore();

  const [show, setShow] = useState(false);
  const [updateShow, setUpdateShow] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const UpdateModalClose = () => setUpdateShow(false);
  const UpdateModalShow = (blog) => {
    setSelectedBlog(blog);
    CreateBlogFormOnChange('title', blog.title);
    CreateBlogFormOnChange('author', blog.author);
    CreateBlogFormOnChange('sortContent', blog.sortContent);
    CreateBlogFormOnChange('fullContent', blog.fullContent);
    CreateBlogFormOnChange('img', blog.img);
    setUpdateShow(true);
  };

  const handleSave = async () => {
    const postBody = { ...CreateBlogFormValue };
    try {
      let response = await CreateBlogRequest(postBody);
      if (response.status === 'success') {
        await BlogListRequest();
        toast.success("Blog Created Success");
        handleClose();
      } else {
        toast.error("Blog Created Failure");
      }
    } catch (err) {
      toast.error('Creating fail', err.message);
    }
  };

  const handleUpdate = async () => {
    const postBody = { ...CreateBlogFormValue, id: selectedBlog._id };
    try {
      await UpdateBlogRequest(postBody);
      await BlogListRequest();
      toast.success("Blog Updated Success");
      UpdateModalClose();
      
    } catch (err) {
      const errorMessage = err.message || 'An unexpected error occurred';
      toast.error(`Updating failed: ${errorMessage}`);
    }
  };

  const Delete = async (id) => {
    try {
      await DeleteBlog(id);
      await BlogListRequest();
      toast.success('Delete successfully');
    } catch (e) {
      toast.error("Fail to delete");
    }
  };





  return (
    <div>
      <div className="d-flex">
        <div className="flex-grow-1 p-4">
          {/* Header Section */}
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="fw-bold text-primary">All Blogs</h2>
            <div>
              <Button variant="primary" onClick={handleShow}>
                Create New Blog
              </Button>
            </div>
          </div>

          {/* Posts Table */}
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>Blog Title</th>
                <th>Short Description</th>
                <th>Created Date</th>
                <th>Actions</th>
              </tr>
            </thead>
              <tbody>
                {
                  BlogList && BlogList.data ? (
                    BlogList.data.map((item, index) => (
                      <tr key={index}>
                        <td>{item.title}</td>
                        <td>{item.sortContent}</td>
                        <td>{item.createdAt}</td>
                        <td>
                          <Button onClick={() => UpdateModalShow(item)} variant="primary" size="sm" className="me-2">
                            <i className="bi bi-pencil"></i> Edit
                          </Button>
                          <Button onClick={async () => await Delete(item._id)} variant="danger" size="sm">
                            <i className="bi bi-trash"></i> Delete
                          </Button>
                        </td>
                      </tr>
                    ))
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

      {/* Create New Blog Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='fw-bold text-primary'>Create New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBlogTitle" className="mb-3">
              <Form.Label>Blog Title</Form.Label>
              <Form.Control value={CreateBlogFormValue.title} onChange={(event) => {CreateBlogFormOnChange('title', event.target.value)}} type="text" placeholder="Enter blog title" />
            </Form.Group>
            <Form.Group controlId="formAuthor" className="mb-3">
              <Form.Label>Author Name</Form.Label>
              <Form.Control value={CreateBlogFormValue.author} onChange={(event) => {CreateBlogFormOnChange('author', event.target.value)}} type="text" placeholder="Enter author name" />
            </Form.Group>
            <Form.Group controlId="formSortContent" className="mb-3">
              <Form.Label>Short Description</Form.Label>
              <Form.Control value={CreateBlogFormValue.sortContent} onChange={(event) => {CreateBlogFormOnChange('sortContent', event.target.value)}} as="textarea" rows={2} placeholder="Enter short description" />
            </Form.Group>
            <Form.Group controlId="formFullContent" className="mb-3">
              <Form.Label>Full Description</Form.Label>
              <Form.Control value={CreateBlogFormValue.fullContent} onChange={(event) => {CreateBlogFormOnChange('fullContent', event.target.value)}} as="textarea" rows={3} placeholder="Enter full description" />
            </Form.Group>
            <Form.Group controlId="formImageUpload" className="mb-3">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control value={CreateBlogFormValue.img} onChange={(event) => {CreateBlogFormOnChange('img', event.target.value)}} type="text" placeholder="Enter img URL" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Blog
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Update Blog Modal */}
      <Modal show={updateShow} onHide={UpdateModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className='fw-bold text-primary'>Update Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBlogTitle" className="mb-3">
              <Form.Label>Blog Title</Form.Label>
              <Form.Control value={CreateBlogFormValue.title} onChange={(event) => {CreateBlogFormOnChange('title', event.target.value)}} type="text" placeholder="Enter blog title" />
            </Form.Group>
            <Form.Group controlId="formAuthor" className="mb-3">
              <Form.Label>Author Name</Form.Label>
              <Form.Control value={CreateBlogFormValue.author} onChange={(event) => {CreateBlogFormOnChange('author', event.target.value)}} type="text" placeholder="Enter author name" />
            </Form.Group>
            <Form.Group controlId="formSortContent" className="mb-3">
              <Form.Label>Short Description</Form.Label>
              <Form.Control value={CreateBlogFormValue.sortContent} onChange={(event) => {CreateBlogFormOnChange('sortContent', event.target.value)}} as="textarea" rows={2} placeholder="Enter short description" />
            </Form.Group>
            <Form.Group controlId="formFullContent" className="mb-3">
              <Form.Label>Full Description</Form.Label>
              <Form.Control value={CreateBlogFormValue.fullContent} onChange={(event) => {CreateBlogFormOnChange('fullContent', event.target.value)}} as="textarea" rows={3} placeholder="Enter full description" />
            </Form.Group>
            <Form.Group controlId="formImageUpload" className="mb-3">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control value={CreateBlogFormValue.img} onChange={(event) => {CreateBlogFormOnChange('img', event.target.value)}} type="text" placeholder="Enter img URL" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={UpdateModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update Blog
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminBlog;
