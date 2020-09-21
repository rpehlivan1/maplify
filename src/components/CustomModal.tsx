import React, { useState } from 'react';
import { Modal, Button, ButtonToolbar } from 'rsuite';
import CustomMap from './CustomMap';


const CustomModal = () => {
  const [open, openModal] = React.useState<boolean>(false);

  /**
   * Hide Modal.
    */
  const closeModal = (): void => {
    openModal(!open)
  };

  return (
    <div className='modal-container'>
      <ButtonToolbar>
        <Button size='lg' appearance='ghost' onClick={() => openModal(!open)}>Open</Button>
      </ButtonToolbar>
      <Modal show={open} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title>Maplify</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CustomMap/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => closeModal()} appearance='primary'>Ok</Button>
          <Button onClick={() => closeModal()} appearance='subtle'>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CustomModal;
