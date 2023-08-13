import { createContext } from "react";
import Jumbutron from "./components/Jumbutron";
import Photo from "./components/Photo";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";
import { useState } from "react";

//Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios('search/photos?page=1&query=coding&client_id=KEVQkgYBz4C-ePA9fPNdt9nRR954BNBmLfV72YQcnnM');
  console.log(response);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      <Jumbutron>
        <SearchField />
      </Jumbutron>
      <Photo />
    </ImageContext.Provider>
  );
}

export default App;
