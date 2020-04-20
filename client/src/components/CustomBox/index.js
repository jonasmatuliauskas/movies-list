import React from 'react'
import { Box } from '@material-ui/core';

const CustomBox = (props) => (
    <Box m={2} {...props}>
        {props.children}
    </Box>
)

export default CustomBox;