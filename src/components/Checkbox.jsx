import React from 'react'

import './Checkbox.css'

const RoundCheckbox = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <label className="flex items-center space-x-2">
        <input type="checkbox" className="checkbox-round" />
        <span className="text-gray-800">{label}</span>
      </label>
    </div>
  )
}

export default RoundCheckbox
