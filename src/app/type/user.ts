/* eslint-disable @typescript-eslint/no-explicit-any */
interface IGeo {
    lat: string;
    lng: string;
  }
  
  interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
  }
  
  interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
  }
  
  export interface IUser {
    [x: string]: any;
    map(arg0: (singleUserData: IUser) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;
  }
  