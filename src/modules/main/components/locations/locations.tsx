import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {
  ICoordinates,
  TLocationResponse,
} from '../../../../libs/locations/data-domains';
import { Card, CardMedia, Divider, Typography } from '@mui/material';
import { BackendService } from '../../../../services/backend-service';
import dayjs from 'dayjs';

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

  const onClickHandler = async (
    selectedLocationIndex: number,
    coordinates: ICoordinates,
  ): Promise<void> => {
    handleSelectedLocation(selectedLocationIndex);
    await handleSelectedLocationStreetName(coordinates);
  };

  const handleSelectedLocation = (selectedLocationIndex: number): void => {
    // NOTE: if the same location is clicked, close the accordion
    if (selectedLocationIndex === selectedLocation) {
      setSelectedLocation(undefined);
      return;
    }
    setSelectedLocation(selectedLocationIndex);
  };

  const handleSelectedLocationStreetName = async (
    coordinates: ICoordinates,
  ): Promise<void> => {
    // NOTE: always set to undefined first
    setSelectedLocationStreetName(undefined);

    // NOTE: 'literally' an expensive api call, only call when necessary
    const geoLocation = await BackendService.getGeoLocation(coordinates);

    // NOTE: some error checking based on google's api
    if (geoLocation.status !== 'OK' || geoLocation.results.length < 1) return;
    // NOTE: just take the first street name
    setSelectedLocationStreetName(geoLocation.results[0].formatted_address);
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
          <AccordionDetails
            sx={{ display: 'flex', justifyContent: 'space-evenly' }}
          >
            <LocalImageCard
              imageHeight={location.image_metadata.height}
              imageWidth={location.image_metadata.width}
              imageUrl={location.image}
            />

            <Divider orientation="vertical" flexItem />

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
          </AccordionDetails>
        </Accordion>
      );
    });
  };

  return <div>{renderLocations()}</div>;
};

export default Locations;