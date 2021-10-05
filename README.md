## Starting The App

`npm start`

## Incidents of Police Brutality

An application displaying data related to police violence in response to George Floyd protests.

## API Documentation

Data is being provided through the [846-backend](https://github.com/949mac/846-backend/) API that collects reported incidents from protesters with video evidence. 

## Features

* displays a map of the U.S. with markers sourced from the geolocations in the API
* "Report An Incident" link in the nav bar that redirects to the original report incident form 
* drop-down menu that allows users to select a state to filter incidents
* a timeline component that organizes incidents in a chronological order
* a Tweet component that ingests the ID to populate the full Tweet

## Known Bugs

* state filtering is off. After selecting a state, it populates data for the state previously selected.
* some states don't populate -- may be too many objects.

## Future Features

* pull one incident after clicking markers on the U.S. map
* style the incident box better, it's pretty rough right now
* limit the number of responses and give a "load more" option
