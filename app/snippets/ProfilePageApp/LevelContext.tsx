import { createContext } from 'react';

// Define the type for the context value
type LevelContextType = number;

// Create the context with a default value of 0
export const LevelContext = createContext<LevelContextType>(0);

