import React, { Suspense, useEffect, useState } from 'react';

import Container from '@mui/material/Container';
import { JustifiedCircularProgress } from '../../components/elements';
import { withBasicLayout } from '../../components/hoc/withBasicLayout';
import BasicDateTimePicker from '../../components/elements/BasicDateTimePicker';
import { Dayjs } from 'dayjs';
import Typography from '@mui/material/Typography';
import { BackendService } from '../../services/backend-service';
import { TLocationResponse } from '../../libs/locations/data-domains';
import Locations from '../../modules/main/components/locations/locations';
import { GenericErrorPage } from '../ErrorPages';

const MainPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [selectedDateTime, setSelectedDateTime] = useState<Dayjs | null>(null);
  const [locations, setLocations] = useState<TLocationResponse[]>();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [selectedDateTime]);

  const handleDateChange = (newDateTime: Dayjs | null) => {
    setSelectedDateTime(newDateTime);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await BackendService.getLocations(
        selectedDateTime?.format('YYYY-MM-DDTHH:mm:ss') || '',
      );
      setLocations(data);
      setLoading(false);
    } catch (e) {
      console.error('locations api is acting out!', e);
      setError(true);
    }
  };

  if (error) {
    return <GenericErrorPage />;
  }

  return (
    <main>
      <Container maxWidth="md">
        <Typography style={{ marginTop: '1rem' }} variant="h5" gutterBottom>
          Pick a datetime and you will see the the traffic and weather
          conditions at that time at the place
        </Typography>
        <BasicDateTimePicker
          selectedDateTime={selectedDateTime}
          handleDateChange={handleDateChange}
        />
        <div style={{ marginTop: '1rem' }}>
          {loading ? (
            <JustifiedCircularProgress />
          ) : (
            <Suspense fallback={<JustifiedCircularProgress />}>
              <Locations locations={locations} />
            </Suspense>
          )}
        </div>
      </Container>
    </main>
  );
};

export default withBasicLayout(MainPage);
