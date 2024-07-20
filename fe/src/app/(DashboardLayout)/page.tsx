'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/components/container/PageContainer';
// components
import SalesOverview from '@/components/dashboard/SalesOverview';
import YearlyBreakup from '@/components/dashboard/TingkatFokus';
import RecentTransactions from '@/components/dashboard/SesiKuliah';
import ProductPerformance from '@/components/dashboard/PerformaPendidik';
import Blog from '@/components/dashboard/Blog';
// import MonthlyEarnings from '@/components/dashboard/Keefektifan';
import SesiKuliah from '@/components/dashboard/SesiKuliah';
import PerformaPendidik from '@/components/dashboard/PerformaPendidik';
import TingkatFokus from '@/components/dashboard/TingkatFokus';
import Keefektifan from '@/components/dashboard/Keefektifan';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TingkatFokus />
              </Grid>
              <Grid item xs={12}>
                <Keefektifan />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <SesiKuliah />
          </Grid>
          <Grid item xs={12} lg={8}>
            <PerformaPendidik/>
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
