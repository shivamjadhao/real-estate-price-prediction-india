export enum CityName {
  Mumbai = 'Mumbai',
  Delhi = 'Delhi',
  Bangalore = 'Bangalore',
  Pune = 'Pune',
  Hyderabad = 'Hyderabad',
  Chennai = 'Chennai'
}

export enum FurnishingStatus {
  Unfurnished = 'Unfurnished',
  SemiFurnished = 'Semi-Furnished',
  Furnished = 'Furnished'
}

export interface PropertyInput {
  city: CityName;
  locality: string;
  bhk: number;
  sqft: number;
  age: number;
  floor: number;
  totalFloors: number;
  furnishing: FurnishingStatus;
  amenities: string[];
}

export interface PredictionResult {
  estimatedPrice: number; // in Lakhs
  priceRange: [number, number];
  pricePerSqFt: number;
  confidenceScore: number;
  growthForecast: {
    year1: number;
    year5: number;
    year10: number;
  };
}

export interface InvestmentMetrics {
  roi: number;
  rentalYield: number;
  breakEvenYears: number;
  monthlyEMI: number;
  appreciationRate: number;
}

export interface CityData {
  name: CityName;
  baseRate: number;
  localities: string[];
  growthRate: number;
}