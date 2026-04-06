const stacks = {
  'Återhämtning & Vävnadsreparation': {
    'low': ['bpc-157', 'bacteriostatic-water'],
    'mid': ['bpc-157', 'bacteriostatic-water', 'nasal-spray-kit'],
    'high': ['bpc-157', 'kpv', 'bacteriostatic-water', 'nasal-spray-kit'],
  },
  'Kognitiv Förbättring': {
    'low': ['selank', 'bacteriostatic-water'],
    'mid': ['selank', 'semax', 'bacteriostatic-water'],
    'high': ['selank', 'semax', 'bacteriostatic-water', 'nasal-spray-kit'],
  },
  'Anti-Aging & Livslängd': {
    'low': ['ghk-cu', 'bacteriostatic-water'],
    'mid': ['ghk-cu', 'epithalon', 'bacteriostatic-water'],
    'high': ['ghk-cu', 'epithalon', 'bpc-157', 'bacteriostatic-water'],
  },
  'Tarm & Inflammation': {
    'low': ['kpv', 'bacteriostatic-water'],
    'mid': ['kpv', 'bpc-157', 'bacteriostatic-water'],
    'high': ['kpv', 'bpc-157', 'selank', 'bacteriostatic-water', 'nasal-spray-kit'],
  },
};

export const researchInterests = [
  'Återhämtning & Vävnadsreparation',
  'Kognitiv Förbättring',
  'Anti-Aging & Livslängd',
  'Tarm & Inflammation',
];

export const experienceLevels = ['Nybörjare', 'Medel', 'Avancerad'];

export const budgetRanges = [
  { label: 'Under 500 kr', value: 'low' },
  { label: '500 – 1 000 kr', value: 'mid' },
  { label: '1 000+ kr', value: 'high' },
];

export function getStackRecommendation(interest, budget) {
  const interestStacks = stacks[interest];
  if (!interestStacks) return [];
  return interestStacks[budget] || [];
}
