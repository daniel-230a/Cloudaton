import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Container, Grid } from '@mui/material';
import { Title, CenteredContainer, CTAButton } from '../assets/ReusableComponents';
import { checkAuthenticated } from '../actions/auth';
import ImageUploader from '../components/dashboard/ImageUploader';
import { styled } from '@mui/system';
import ButtonsSummary from '../components/dashboard/ButtonsSummary';
import JobQueueSummary from '../components/dashboard/JobQueueSummary';
import ProgressSummary from '../components/dashboard/ProgressSummary';
import StorageSummary from '../components/dashboard/StorageSummary';
import DashboardNav from '../components/dashboard/DashboardNav';

export const DashBoardContainer = styled(Container, {})({
  marginTop: '110px',
});

const Dashboard = ({isAuthenticated}) => {
    /*
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }*/

    return (
        <DashBoardContainer component="main" maxWidth="90%">
          <Grid container direction='row' spacing={5}>
            <Grid item xs={3} lg={2}>
              <DashboardNav/>
            </Grid>
            <Grid item xs={9} lg={10}>      
              <Grid container direction='row' spacing={3} alignItems="center">
                <Grid item sm={12} lg={7}>
                  <StorageSummary/>
                </Grid>
                <Grid item sm={12} lg={5}>
                  <JobQueueSummary/>
                </Grid>
                <Grid item sm={12} lg={7}>
                  <ButtonsSummary/>
                </Grid>
                <Grid item sm={12} lg={5}>
                  <ProgressSummary/>
                </Grid>
                <Grid item sm={12} lg={7}>
                  <ImageUploader/>
                </Grid>
              </Grid> 
            </Grid>
          </Grid>           
      </DashBoardContainer>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { checkAuthenticated })(Dashboard);