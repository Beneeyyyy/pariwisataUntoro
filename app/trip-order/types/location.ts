export interface LocationDetail {
  id: string;
  name: string;
  mainImage: string;
  description: string;
  history: string;
  bestTimeToVisit: string;
  tips: string[];
  attractions: {
    title: string;
    description: string;
    image: string;
  }[];
  funFacts: {
    fact: string;
    description: string;
    image: string;
  }[];
}
