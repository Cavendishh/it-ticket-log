import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addLog } from '../../actions/logActions'

import M from 'materialize-css/dist/js/materialize.min.js'

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('')
  const [important, setImportant] = useState(false)
  const [tech, setTech] = useState('')

  const onSubmit = () => {
    if (!message && !tech) M.toast({ html: 'Please enter a message and a technician'})
    else if (!message) M.toast({ html: 'Please enter a message' })
    else if (!tech) M.toast({ html: 'Please enter a technician' })
    else {
      const newLog = {
        message,
        important,
        tech,
        date: new Date()
      }

      addLog(newLog)

      M.toast({ html: `Log added by ${tech}` })

      setMessage('')
      setTech('')
      setImportant(false)
    }
  }
  
  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
             type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={e => setTech(e.target.value)}
            >
              <option value='' disabled>Select Technician</option>
              <option value='Janne Kavander'>Janne Kavander</option>
              <option value='Mai Nguyen'>Mai Nguyen</option>
              <option value='Phuc Lee'>Phuc Lee</option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={important}
                  value={important}
                  onChange={e => setImportant(!important)}
                />
                <span>Important ticket</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a 
          href='#' 
          onClick={onSubmit} 
          className='modal-close waves-effect waves-green blue btn'
        >
          Enter
        </a>
      </div>
    </div>
  )
}

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
}

const modalStyle = {
  width: '75%',
  height: '75%'
}

export default connect(null, { addLog })(AddLogModal)