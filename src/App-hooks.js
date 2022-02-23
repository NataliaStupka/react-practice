import React from 'react';
import ColorPicker from './component-hooks/ColorPickerHook/ColorPickerHook';
import Counter from './component-hooks/CounterHooks/CounterHooks.jsx';
import Form from './component-hooks/FormHooks/FormHooks';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const AppHooks = () => {
  return (
    <>
      <div style={{ margin: 20 }}>
        <h1>HOOOOoooks</h1>
        <p>
          ------------- Hook useState (для управления состояния)------------
        </p>
        <ColorPicker options={colorPickerOptions} />

        <p>----- useState, useEffect -----------</p>
        <Counter />

        <p>-----------------</p>
        <Form />
      </div>
    </>
  );
};

export default AppHooks;
