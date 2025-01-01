import React, { useState } from 'react';
import ServiceStore from '../../store/ServiceStore';
import { toast } from 'react-toastify';
import { Button, Form, Modal } from 'react-bootstrap';
import AdminSkeleton from '../../skeleton/AdminSkeleton';

const AdminService = () => {

  const { ServiceList, CreateServiceFormValue, CreateServiceFormOnChange, CreateServiceRequest, DeleteService, ServiceListRequest, UpdateServiceRequest } = ServiceStore();

  const [show, setShow] = useState(false);
  const [updateShow, setUpdateShow] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const UpdateModalClose = () => setUpdateShow(false);
  const UpdateModalShow = (service) => {
    setSelectedService(service);
    CreateServiceFormOnChange('title', service.title);
    CreateServiceFormOnChange('description', service.description);
    CreateServiceFormOnChange('img', service.img);
    setUpdateShow(true);
  };

  const handleSave = async () => {
    const postBody = { ...CreateServiceFormValue };
    try {
      let response = await CreateServiceRequest(postBody);
      if (response.status === 'success') {
        await ServiceListRequest();
        toast.success("Service Created Success");
        handleClose();
      } else {
        toast.error("Service Created Failure");
      }
    } catch (err) {
      toast.error('Creating fail', err.message);
    }
  };

  const handleUpdate = async () => {
    const postBody = { ...CreateServiceFormValue, id: selectedService._id };
    try {
      await UpdateServiceRequest(postBody);
      await ServiceListRequest();
      toast.success("Service Updated Success");
      UpdateModalClose();
      
    } catch (err) {
      const errorMessage = err.message || 'An unexpected error occurred';
      toast.error(`Updating failed: ${errorMessage}`);
    }
  };

  const Delete = async (id) => {
    try {
      await DeleteService(id);
      await ServiceListRequest();
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
            <h2 className="fw-bold text-primary">All Service</h2>
            <div>
              <Button variant="primary" onClick={handleShow}>
                Create New Service
              </Button>
            </div>
          </div>

          {/* Posts Table */}
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>Service Title</th>
                <th>Description</th>
                <th>Created Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                ServiceList && ServiceList.data ? (
                  ServiceList?.data?.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <p className="text-decoration-none">
                          {item['title']}
                        </p>
                      </td>
                      <td>{item['description']}</td>
                      <td>{item['createdAt']}</td>
                      <td>
                        <Button onClick={() => UpdateModalShow(item)} variant="primary" size="sm" className="me-2">
                          <i className="bi bi-pencil"></i> Edit
                        </Button>
                        <Button onClick={async () => { await Delete(item['_id']) }} variant="danger" size="sm">
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

      {/* Create New Service Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-primary fw-bold'>Create New Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formServiceTitle" className="mb-3">
              <Form.Label>Service Title</Form.Label>
              <Form.Control value={CreateServiceFormValue.title} onChange={(event) => { CreateServiceFormOnChange('title', event.target.value) }} type="text" placeholder="Enter service title" />
            </Form.Group>
            <Form.Group controlId="formServiceDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control value={CreateServiceFormValue.description} onChange={(event) => { CreateServiceFormOnChange('description', event.target.value) }} as="textarea" rows={3} type="text" placeholder="Write description" />
            </Form.Group>
            <Form.Group controlId="formImageUpload" className="mb-3">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control value={CreateServiceFormValue.img} onChange={(event) => { CreateServiceFormOnChange('img', event.target.value) }} type="text" placeholder="Enter img URL" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Service
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Update Service Modal */}
      <Modal show={updateShow} onHide={UpdateModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-primary fw-bold'>Update Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formServiceTitle" className="mb-3">
              <Form.Label>Service Title</Form.Label>
              <Form.Control value={CreateServiceFormValue.title} onChange={(event) => { CreateServiceFormOnChange('title', event.target.value) }} type="text" placeholder="Enter service title" />
            </Form.Group>
            <Form.Group controlId="formServiceDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control value={CreateServiceFormValue.description} onChange={(event) => { CreateServiceFormOnChange('description', event.target.value) }} type="text" placeholder="Write description" />
            </Form.Group>
            <Form.Group controlId="formImageUpload" className="mb-3">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control value={CreateServiceFormValue.img} onChange={(event) => { CreateServiceFormOnChange('img', event.target.value) }} type="text" placeholder="Enter img URL" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={UpdateModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update Service
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminService;
