import React, { useState } from 'react';  
import Choosing from './views/Choosing.jsx';  
import CompanyForm from './views/CompanyForm.jsx';  
import IndividualForm from './views/IndividualForm.jsx';  
import Settings from './components/Settings.jsx';  
import { FiSettings } from 'react-icons/fi';  
  
const App = () => {  
  
  const [businessType, setBusinessType] = useState(null);  
  const [showSettings, setShowSettings] = useState(false);  
  const [country, setCountry] = useState(null);    
  
  const handleBusinessTypeChange = (type, country) => {  
    setBusinessType(type); 
    setCountry(country); 
  }  
  
  return (  
    <div className='flex'>  
  
      <div className='w-1/3 p-5'>  
      <Choosing onBusinessTypeChange={handleBusinessTypeChange} />  
  
        <div className="absolute bottom-0 left-0 p-5">  
          <FiSettings  
            className="text-4xl cursor-pointer"  
            onClick={() => setShowSettings(true)}   
          />  
        </div>  
  
        <Settings  
          show={showSettings}  
          onClose={() => setShowSettings(false)}  
        />  
      </div>  
  
      <div className='border-l border-gray-300'></div>  
  
      <div className='w-2/3 p-5 bg-gray-100 h-screen'>  
      {businessType === 'company' ? <CompanyForm country={country}/> : (businessType === 'individual' ? <IndividualForm /> : null)}      
      </div>  
  
    </div>  
  );  
}  
  
export default App;  