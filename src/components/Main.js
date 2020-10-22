import React from 'react';
import PropTypes from 'prop-types';
import { toastr } from 'react-redux-toastr';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import ChatBot from 'react-simple-chatbot';

import { validateData } from './utils';
import { sendSms } from 'apis';

const muiStyles = theme => ({
  container: {
    height: '100vh',
  },
});

const Main = ({ classes }) => {
  const chatStpes = [
    {
      id: 'Ask a name',
      message: 'Thank you for using our service. What is your name?',
      trigger: 'answer name',
    },
    {
      id: 'answer name',
      user: true,
      trigger: 'Ask an email',
    },
    {
      id: 'Ask an email',
      message: 'Hi, {previousValue}. What is your email address?',
      trigger: 'answer email',
    },
    {
      id: 'answer email',
      user: true,
      validator: value => {
        if (validateData('EMAIL', value)) {
          return true;
        } else {
          return 'Please enter validate Email format.';
        }
      },
      trigger: 'Ask phone number',
    },
    {
      id: 'Ask phone number',
      message: 'Where should I text this report?(US Phone number)',
      trigger: 'Answer phone number',
    },
    {
      id: 'Answer phone number',
      user: true,
      validator: value => {
        if (validateData('PHONE', value)) {
          return true;
        } else {
          return 'Please enter validate phone number format.';
        }
      },
      end: true,
    },
  ];

  const handleEnd = async ({ steps, values }) => {
    const userInfo = {
      Name: values[0],
      Email: values[1],
      Phone: values[2],
    };
    const res = await sendSms(userInfo);
    if (res.data.success) {
      toastr.success('Success', 'Sms sent successfully.');
    } else {
      toastr.error('Error', 'Service Failed');
    }
  };

  return (
    <Grid container justify="center" alignItems="center" className={classes.container}>
      <ChatBot headerTitle="Pace Ellsworth Sms Service" handleEnd={handleEnd} steps={chatStpes} />
    </Grid>
  );
};

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(muiStyles)(Main);
