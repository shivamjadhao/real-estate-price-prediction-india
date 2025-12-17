import { CityName, CityData } from './types';

export const CITIES: Record<CityName, CityData> = {
  [CityName.Mumbai]: {
    name: CityName.Mumbai,
    baseRate: 25000,
    localities: ['Andheri West', 'Bandra', 'Powai', 'Worli', 'Malad', 'Juhu', 'Thane'],
    growthRate: 0.08
  },
  [CityName.Delhi]: {
    name: CityName.Delhi,
    baseRate: 12000,
    localities: ['Dwarka', 'Vasant Kunj', 'Saket', 'Lajpat Nagar', 'Rohini', 'Greater Kailash'],
    growthRate: 0.06
  },
  [CityName.Bangalore]: {
    name: CityName.Bangalore,
    baseRate: 9000,
    localities: ['Indiranagar', 'Whitefield', 'Koramangala', 'HSR Layout', 'Electronic City', 'Hebbal'],
    growthRate: 0.10
  },
  [CityName.Pune]: {
    name: CityName.Pune,
    baseRate: 7500,
    localities: ['Kothrud', 'Viman Nagar', 'Baner', 'Wakad', 'Hinjewadi', 'Kalyani Nagar'],
    growthRate: 0.09
  },
  [CityName.Hyderabad]: {
    name: CityName.Hyderabad,
    baseRate: 6500,
    localities: ['Gachibowli', 'Jubilee Hills', 'Madhapur', 'Banjara Hills', 'Kukatpally'],
    growthRate: 0.12
  },
  [CityName.Chennai]: {
    name: CityName.Chennai,
    baseRate: 7000,
    localities: ['Adyar', 'Anna Nagar', 'T Nagar', 'Velachery', 'OMR'],
    growthRate: 0.05
  }
};

export const AMENITIES_LIST = [
  'Car Parking',
  'Gymnasium',
  'Swimming Pool',
  '24x7 Security',
  'Power Backup',
  'Club House',
  'Jogging Track',
  'Children Play Area'
];

export const INTEREST_RATE = 8.5; // Home Loan Interest Rate
export const LOAN_TENURE_YEARS = 20;