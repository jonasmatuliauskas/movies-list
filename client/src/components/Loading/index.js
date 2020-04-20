import React from 'react'
import { CircularProgress } from '@material-ui/core';

import CustomBox from '../CustomBox'

const Loading = () => (
    <CustomBox display="flex" justifyContent="center">
        <CircularProgress />
    </CustomBox>
)

export default Loading;