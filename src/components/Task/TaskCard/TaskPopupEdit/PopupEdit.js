import React from 'react'
import { Modal, Button } from 'antd';
import ModalEdit from './ModalEdit';

const PopupEdit = e => {

  if (!e.openPopup)
      return null
    
  return (
    <div>
      <Modal 
        visible={true}
        title="Atualizar Atividade"
        onOk={e.onClose}
        onCancel={e.onClose}
        style={{top:'5rem'}}
        footer={
          <Button type='submit' onClick={e.onClose}>
            Voltar
          </Button>
          }
        >
          <ModalEdit task={e.task}/>
      </Modal>
    </div>
  )
}


export default PopupEdit;