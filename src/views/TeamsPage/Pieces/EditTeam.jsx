import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

function EditTeam({ isCreate, api }) {
  const navigate = useNavigate();
  const { id } = useParams(); // grab id from url
  const teamId = !isCreate ? id : '';

  const title = !isCreate ? 'Edit Team' : 'Add Team';

  const [formData, setFormData] = useState({});
  const [name, setName] = useState('');
  const [coachName, setCoachName] = useState('');
  const [coachPhone, setCoachPhone] = useState('');
  const [coachEmail, setCoachEmail] = useState('');
  const [coachOptions, setCoachOptions] = useState([]);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    api.getLookup('coaches').then((coachLookup) => {
      const options = coachLookup.map((coach) => ({
        id: coach.value,
        name: coach.label,
      }));
      setCoachOptions(options);

      if (!isCreate) {
        api.read(teamId).then((team) => {
          console.log('Team:', team);
          setFormData(team);
          setName(team.name);
          setCoachName(team.coachName);
          setCoachPhone(team.coachPhone);
          setCoachEmail(team.coachEmail);
        });
      } else {
        setFormData({});
      }
    });
  }, [isCreate, teamId, api]);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    const updatedTeam = {
      id: teamId,
      name: name,
      coachName: coachName,
      coachPhone: coachPhone,
      coachEmail: coachEmail,
    };

    if (isCreate) {
      api.create(updatedTeam);
    } else {
      api.update(updatedTeam);
    }
    navigate('/teams');
  };

  return (
    <Container className="my-5" style={{ backgroundColor: 'white', padding: '20px' }}>
      <h1>{title}</h1>
      <Form className="mb-2" noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="teamName">
          <Form.Label>Team Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter team name"
            value={name || ''}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">Please enter a team name.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="coachName">
          <Form.Label>Coach Name</Form.Label>
          <Form.Control type="text" value={coachName} onChange={(e) => setCoachName(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="coachPhone">
          <Form.Label>Coach Phone</Form.Label>
          <Form.Control type="text" value={coachPhone} onChange={(e) => setCoachPhone(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="coachEmail">
          <Form.Label>Coach Email</Form.Label>
          <Form.Control type="email" value={coachEmail} onChange={(e) => setCoachEmail(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </Container>
  );
}

export default EditTeam;
