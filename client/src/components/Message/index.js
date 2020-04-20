import React from 'react'
import { Alert } from '@material-ui/lab';

import CustomBox from '../CustomBox'

const Message = (props) => (
    <CustomBox>
        <Alert severity={props.type}>
            {props.children}
        </Alert>
    </CustomBox>
)

export default Message;