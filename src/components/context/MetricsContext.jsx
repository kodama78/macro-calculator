import React from 'react';

const MetricsContext = React.createContext({});

export const MetricsProvider = MetricsContext.Provider;
export const MetricsConsumer = MetricsContext.Consumer;