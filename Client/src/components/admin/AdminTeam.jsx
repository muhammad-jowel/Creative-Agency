import React, { useState } from 'react';
import TeamStore from '../../store/TeamStore';
import { toast } from 'react-toastify';
import { Button, Modal, Form } from 'react-bootstrap';
import AdminSkeleton from '../../skeleton/AdminSkeleton';

const AdminTeam = () => {
    
    const { TeamList, CreateTeamFormValue, CreateTeamFormOnChange, CreateTeamRequest, DeleteTeam, TeamListRequest, UpdateTeamRequest } = TeamStore()
 

  const [show, setShow] = useState(false);
  const [updateShow, setUpdateShow] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const UpdateModalClose = () => setUpdateShow(false);
  const UpdateModalShow = (team) => {
    setSelectedTeam(team);
    CreateTeamFormOnChange('name', team.name);
    CreateTeamFormOnChange('designation', team.designation);
    CreateTeamFormOnChange('bio', team.bio);
    CreateTeamFormOnChange('img', team.img);
    setUpdateShow(true);
  }

  const handleSave = async () => {
    const postBody = { ...CreateTeamFormValue };
        try {
            let response = await CreateTeamRequest(postBody);
            if (response.status === 'success') {
                await TeamListRequest();
                toast.success("Team Created Success");          
                handleClose()
            } else {
                toast.error("Team Created Failure");
            }
        } catch (err) {
            toast.error('Creating fail', err.message);
        }
  };

  const handleUpdate = async () => {
    const postBody = { ...CreateTeamFormValue, id: selectedTeam._id };
    try {
        await UpdateTeamRequest(postBody);
        await TeamListRequest();
        toast.success("Team Updated Success");          
        UpdateModalClose();
    } catch (err) {
        const errorMessage = err.message || 'An unexpected error occurred';
        toast.error(`Updating failed: ${errorMessage}`);
    }
};


  const Delete = async (id) => {
    try {
        await DeleteTeam(id);
        await TeamListRequest();
        toast.success('Delete successfully');

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
            <h2 className="fw-bold text-primary">All Team</h2>
            <div>
              <Button variant="primary" onClick={handleShow}>
                Create New Member
              </Button>
            </div>
          </div>

          {/* Posts Table */}
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Created Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              
              {
                TeamList && TeamList.data ? (
                  TeamList?.data?.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{item['name']}</td>
                            <td>{item['designation']}</td>
                            <td>{item['createdAt']}</td>
                            <td>
                                <Button onClick={() => UpdateModalShow(item)} variant="primary" size="sm" className="me-2">
                                    <i className="bi bi-pencil"></i> Edit
                                </Button>
                                <Button onClick={async () => {await Delete(item['_id'])}} variant="danger" size="sm">
                                    <i className="bi bi-trash"></i> Delete
                                </Button>
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

      {/* Create New Blog Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-primary fw-bold'>Create New Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formServiceTitle" className="mb-3">
              <Form.Label>Member Name</Form.Label>
              <Form.Control value={CreateTeamFormValue.name} onChange={(event) => {CreateTeamFormOnChange('name', event.target.value)}} type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group controlId="formBlogTitle" className="mb-3">
              <Form.Label>Designation</Form.Label>
              <Form.Control value={CreateTeamFormValue.designation} onChange={(event) => {CreateTeamFormOnChange('designation', event.target.value)}} type="text" placeholder="Write description" />
            </Form.Group>
            <Form.Group controlId="formBlogTitle" className="mb-3">
              <Form.Label>Member Bio</Form.Label>
              <Form.Control value={CreateTeamFormValue.bio} onChange={(event) => {CreateTeamFormOnChange('bio', event.target.value)}} type="text" placeholder="Write bio" />
            </Form.Group>
            <Form.Group controlId="formImageUpload" className="mb-3">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control value={CreateTeamFormValue.img} onChange={(event) => {CreateTeamFormOnChange('img', event.target.value)}} type="text" placeholder="Enter img URL" />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Team
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Update modal */}
      <Modal show={updateShow} onHide={UpdateModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-primary fw-bold'>Update Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formServiceTitle" className="mb-3">
              <Form.Label>Member Name</Form.Label>
              <Form.Control value={CreateTeamFormValue.name} onChange={(event) => {CreateTeamFormOnChange('name', event.target.value)}} type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group controlId="formBlogTitle" className="mb-3">
              <Form.Label>Designation</Form.Label>
              <Form.Control value={CreateTeamFormValue.designation} onChange={(event) => {CreateTeamFormOnChange('designation', event.target.value)}} type="text" placeholder="Write description" />
            </Form.Group>
            <Form.Group controlId="formBlogTitle" className="mb-3">
              <Form.Label>Member Bio</Form.Label>
              <Form.Control value={CreateTeamFormValue.bio} onChange={(event) => {CreateTeamFormOnChange('bio', event.target.value)}} type="text" placeholder="Write bio" />
            </Form.Group>
            <Form.Group controlId="formImageUpload" className="mb-3">
                <Form.Label>Upload Image</Form.Label>
                <Form.Control value={CreateTeamFormValue.img} onChange={(event) => {CreateTeamFormOnChange('img', event.target.value)}} type="text" placeholder="Enter img URL" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={UpdateModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update Team
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );

};

export default AdminTeam;
