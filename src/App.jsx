import React, { useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
import Main from './components/Main';
import conf from './conf/conf';

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // Initially set to true

  const toggleShow = () => {
    setShow(!show);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${conf.nasaApiKey}`;

      const today = (new Date()).toDateString();
      const localKey = `NASA-${today}`;

      try {
        if (localStorage.getItem(localKey)) {
          const apiData = JSON.parse(localStorage.getItem(localKey));
          setData(apiData);
          console.log('Data from local storage');
        } else {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const apiData = await response.json();
          localStorage.setItem(localKey, JSON.stringify(apiData));
          setData(apiData);
          console.log('Data from API');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Update loading state after fetch attempt
      }
    }

    fetchAPIData();
  }, []);

  return (
    <div className='flex flex-col h-screen'>
      {show && <SideBar data={data} toggleShow={toggleShow} />}
      <div className='flex-grow'>
        {loading ? (
          <div className='flex justify-center items-center h-screen font-mono text-white'>Loading...</div>
        ) : (
          data && <Main data={data} />
        )}
      </div>
      {data && <Footer data={data} toggleShow={toggleShow} />}
    </div>
  );
}

export default App;
