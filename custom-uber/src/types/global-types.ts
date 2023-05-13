export type FilterDataItem = {
    name: string;
    image: any;
    id: string;
  };
  
export type RideDataItem = {
    street: string;
    area: string;
    id: string;
  };
  
export type CarTypeDataItem = {
    title: string;
    data: {
      name: string;
      group: number;
      price: number;
      image: any;
      note: string;
      promotion: number;
      time: string;
      id: string;
    }[];
  };
  
export type RequestDataItem = {
    name: string;
    id: number;
  };
  
export type RideOption = {
    name: string;
    icon: string;
    id: string;
  };
  
export type PaymentOption = {
    image: any;
    text: string;
  };
  
export type AvailableService = string;
  
export type CarAround = {
    latitude: number;
    longitude: number;
  };