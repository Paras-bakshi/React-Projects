import { useRef, useState, useEffect } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';


function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState([]);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  // after the compoenent execution over then this useeffect hook will execute.
  // second input is the dependencies if remain empty then it will run only once after the app function run
  useEffect(()=>{
    // this is the side effect as its not related to the goal of return
  navigator.geolocation.getCurrentPosition((position)=>{
    const sortedPlaces=sortPlacesByDistance(AVAILABLE_PLACES,position.coords.latitude,position.coords.longitude);

    setAvailablePlaces(sortedPlaces);
  });

  },[])

  


  function handleStartRemovePlace(id) {
    modal.current.open();
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    modal.current.close();
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });


    //this is a sideeffect not we dont need useeffect hook here as no issues no infinity loop.
    // not every side effect need useeffect code.
    const storedIds= JSON.parse(localStorage.getItem("selectedPlaces"))||[];

    if(storedIds.indexOf(id)===-1){
    localStorage.setItem("selectedPlaces",JSON.stringify([id,...storedIds]));
    }
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    modal.current.close();

    // not required to do the same stuff
    const storedIds= JSON.parse(localStorage.getItem("selectedPlaces"))||[];




  }

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
