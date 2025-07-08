import React, { useState } from 'react';
import './SpaceMissionForm.module.css';

const SpaceMissionForm: React.FC = () => {
  const [name, setName] = useState('');
  const [planet, setPlanet] = useState('Mars');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePlanetChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlanet(e.target.value);
  };

  return (
    <div className="form-container">
      <h2>🚀 Register for Your Space Mission</h2>

      <div className="form-group">
        <label>
          Astronaut Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          Destination Planet:
          <select value={planet} onChange={handlePlanetChange}>
            <option value="Mars">Mars</option>
            <option value="Venus">Venus</option>
            <option value="Jupiter">Jupiter</option>
            <option value="Saturn">Saturn</option>
          </select>
        </label>
      </div>

      <div className="mission-message">
        {name.trim() === ''
          ? 'Please enter your name to begin your mission.'
          : `🧑‍🚀 Astronaut ${name} is headed to ${planet}!`}
      </div>
    </div>
  );
};

export default SpaceMissionForm;