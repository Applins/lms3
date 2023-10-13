// AlertList.jsx
import React from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertList({ alerts, onAlertClose }) {
  return (
    <div>
      {alerts.map((alert, index) => (
        <Alert key={index} variant={alert.type} onClose={() => onAlertClose(index)} dismissible>
          {alert.title}
        </Alert>
      ))}
    </div>
  );
}

export default AlertList;
