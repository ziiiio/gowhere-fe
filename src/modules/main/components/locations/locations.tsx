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

const Locations = ({ locations }: { locations?: TLocationResponse[] }) => {
  const [selectedLocation, setSelectedLocation] = useState<number>();
  const [selectedLocationStreetName, setSelectedLocationStreetName] =
    useState<string>();

  const onClickHandler = async (
    selectedLocationIndex: number,
    coordinates: ICoordinates,
  ) => {
    if (selectedLocationIndex === selectedLocation) {
      setSelectedLocation(undefined);
      return;
    }
    setSelectedLocation(selectedLocationIndex);
    const geoLocation = await BackendService.getGeoLocation(coordinates);
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
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
          >
            <Typography>
              Camera {location.camera_id} - {location.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ display: 'flex', justifyContent: 'space-evenly' }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height={location.image_metadata.height}
                width={location.image_metadata.width}
                image={location.image}
              />
            </Card>
            <Divider orientation="vertical" flexItem />
            <div>
              <Typography gutterBottom variant="h6" component="div">
                Street Name:
              </Typography>
              <Typography gutterBottom variant="body1" component="div">
                {selectedLocationStreetName}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Weather:
              </Typography>
              <Typography gutterBottom variant="body1" component="div">
                {location.forecast}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Time Taken:
              </Typography>
              <Typography gutterBottom variant="body1" component="div">
                {dayjs(location.timestamp).format('DD/MM/YYYY HH:mm:ss')}
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
      );
    });
  };

  return <div>{renderLocations()}</div>;
};

export default Locations;
