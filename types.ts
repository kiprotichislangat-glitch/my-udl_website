
// Import React to resolve 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
}

export interface UDLPrinciple {
  title: string;
  strengths: string[];
  limitations: string[];
}