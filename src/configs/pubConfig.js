import React, { createContext, useContext, useState, useEffect } from 'react';
//import appConfig from '../../public/appConfig.json';

const ConfigContext = createContext();

export const useConfig = () => useContext(ConfigContext);

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    fetch('/appConfig.json')
      .then((response) => response.json())
      .then((config) => {
        setConfig(config);
      })
      .catch((error) => console.error('Failed to load configuration:', error));
  }, []);

  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
};

// configService.js
let config = null;

export const getConfig = async () => {
  if (!config) {
    try {
      const response = await fetch('/appConfig.json');
      config = await response.json();
    } catch (error) {
      console.error('Failed to load configuration:', error);
    }
  }

  return config;
};