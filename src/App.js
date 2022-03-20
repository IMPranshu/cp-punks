import './App.css';
import CollectionCard from './components/CollectionCard';
import Punklist from './components/Punklist';
import { Header } from './components/Header';
import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [punkListData, setPunkListData] = useState([]);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xcdc62958e328318925ed93D55498118DFf65CdF8&order_direction=asc')

      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    }
    return getMyNfts()
    

  }, [])


    return( 
    <div className="app">
      <Header/>
      <Punklist punkListData={punkListData} />
    </div>
    )
}

export default App;
