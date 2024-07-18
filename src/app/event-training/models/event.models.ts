// event.model.ts

export enum EventCategory {
    COMPUTER_SCIENCE = 'COMPUTER_SCIENCE',
    EMBEDDED_SYSTEMS = 'EMBEDDED_SYSTEMS',
    AI = 'AI',
    DEVOPS = 'DEVOPS',
    DATA_ANALYSIS = 'DATA_ANALYSIS',
    BUSINESS_ANALYSIS = 'BUSINESS_ANALYSIS'
  }
export  interface Event {
    id: number;
    title: string;
    description: string;
    eventDateTime: string;
    category: string;
    isOnline: boolean;
    nbrOfPlaces: number;
    isApproved: false;
  }
  