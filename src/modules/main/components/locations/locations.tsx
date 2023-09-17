import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  ICoordinates,
  TLocationResponse,
} from '../../../../libs/locations/data-domains';
import { Card, CardMedia, Typography } from '@mui/material';
import { BackendService } from '../../../../services/backend-service';
import dayjs from 'dayjs';
import { StyledAccordionDetails, StyledDivider } from './locations.styles';
import { useIsMobileView } from '../../../../helpers/hooks/isMobile';

// NOTE: components most likely will not be used by others, so no need to export
const LocalAccordionSummary = ({
  cameraId,
  areaName,
}: {
  cameraId: string;
  areaName: string;
}) => (
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel3a-content"
  >
    <Typography>
      Camera {cameraId} - {areaName}
    </Typography>
  </AccordionSummary>
);

const LocalImageCard = ({
  imageHeight,
  imageWidth,
  imageUrl,
}: {
  imageHeight: number;
  imageWidth: number;
  imageUrl: string;
}) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height={imageHeight}
      width={imageWidth}
      image={imageUrl}
    />
  </Card>
);

const Details = ({ title, text }: { title: string; text: string }) => (
  <>
    <Typography gutterBottom variant="h6" component="div">
      {title}:
    </Typography>
    <Typography gutterBottom variant="body1" component="div">
      {text}
    </Typography>
  </>
);

const Locations = ({ locations }: { locations?: TLocationResponse[] }) => {
  const [selectedLocation, setSelectedLocation] = useState<number>();
  const [selectedLocationStreetName, setSelectedLocationStreetName] =
    useState<string>();

  const { isMobile } = useIsMobileView();

  const onClickHandler = async (
    selectedLocationIndex: number,
    coordinates: ICoordinates,
  ): Promise<void> => {
    // NOTE: if the same location is clicked, close the accordion, and skip
    if (selectedLocationIndex === selectedLocation) {
      setSelectedLocation(undefined);
      return;
    }

    setSelectedLocation(selectedLocationIndex);

    try {
      // NOTE: 'literally' an expensive api call, only call when necessary
      const geoLocation = await BackendService.getGeoLocation(coordinates);
      // NOTE: some error checking based on google's api
      if (geoLocation.status !== 'OK' || geoLocation.results.length < 1) {
        console.warn('google cannot find the street name');
        setSelectedLocationStreetName(undefined);
        return;
      }
      // NOTE: just take the first street name
      setSelectedLocationStreetName(geoLocation.results[0].formatted_address);
    } catch (e) {
      console.error('error getting geo location', e);
      setSelectedLocationStreetName(undefined);
    }
  };

  const renderLocations = () => {
    if (!locations) return <></>;

    return locations?.map((location, index) => {
      return (
        <Accordion
          expanded={index === selectedLocation}
          onClick={() => onClickHandler(index, location.location)}
          key={`${location.name}${location.camera_id}`}
          TransitionProps={{ unmountOnExit: true }}
        >
          <LocalAccordionSummary
            cameraId={location.camera_id}
            areaName={location.name}
          />
          <StyledAccordionDetails>
            <LocalImageCard
              imageHeight={location.image_metadata.height}
              imageWidth={location.image_metadata.width}
              imageUrl={location.image}
            />

            <StyledDivider
              orientation={isMobile ? 'horizontal' : 'vertical'}
              flexItem
            />

            <div>
              <Details
                title={'Street Name'}
                text={selectedLocationStreetName ?? 'Street name not found'}
              />
              <Details title={'Weather'} text={location.forecast} />
              <Details
                title={'Time Taken'}
                text={dayjs(location.timestamp).format('DD/MM/YYYY HH:mm:ss')}
              />
            </div>
          </StyledAccordionDetails>
        </Accordion>
      );
    });
  };

  return <div>{renderLocations()}</div>;
};

export default Locations;
