import React from 'react';
import PropTypes from 'prop-types';
import { NotifSpan,NotifWrap } from './Notification.styled';

export const Notification = ({ message }) =>
    (
       <NotifWrap><NotifSpan>{message}</NotifSpan></NotifWrap>
          
      
      );
Notification.propTypes = { message: PropTypes.string.isRequired };
Notification.propTypes ={message:PropTypes.string.isRequired,}