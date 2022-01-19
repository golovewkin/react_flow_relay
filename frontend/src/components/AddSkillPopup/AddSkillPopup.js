import React, {useState} from 'react';
import './styles.css'

const AddSkillPopup = ({open, onSuccess, onClose}) => {
  const [inputValue, setInputValue] = useState('');

  if (!open) return null;
  return (
    <section className="AddSkillPopup__overlay">
      <section className="AddSkillPopup">
        <input
          type="text"
          placeholder='Skill'
          value={inputValue}
          onInput={(e) => setInputValue(e.target.value)}
        />
        <section className="AddSkillPopup__buttons">
          <button
            onClick={() => {
              onClose();
              setInputValue('');
            }}
          >
            cancel
          </button>
          <button
            disabled={!inputValue}
            onClick={() => {
              onSuccess(inputValue);
              setInputValue('');
            }}
          >
            add
          </button>
        </section>
      </section>
    </section>
  )
};

export default AddSkillPopup;

