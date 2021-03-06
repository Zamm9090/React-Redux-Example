import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import _ from 'lodash'
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  CardTitle,
} from '@fc/react-playbook'

import s from './GridCustomizeColumnsModal.scss'
// import { Menu, MenuItem } from '../Menu'
import GridCustomizeColumns from './GridCustomizeColumns'
// import { idSymbol } from './gridUtils'
// import Checkbox from '../Checkbox'
// import PropTypes from 'prop-types'

class GridCustomizeColumnsModal extends Component {
  static propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
  }

  render() {
    const { open, onClose } = this.props
    return (
      <Modal open={open} onClose={onClose} className={s.modal}>
        <ModalHeader>
          <CardTitle>Customize Columns</CardTitle>
        </ModalHeader>
        <ModalBody className={s.body}>
          <GridCustomizeColumns />
        </ModalBody>
        <ModalFooter>Modal Footer</ModalFooter>
      </Modal>
    )
  }
}

export default GridCustomizeColumnsModal
