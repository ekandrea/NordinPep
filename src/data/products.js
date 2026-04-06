export const products = [
  {
    id: 'bpc-157',
    slug: 'bpc-157',
    name: 'BPC-157',
    subtitle: 'Studerad för: Återhämtning & Tarmfunktion',
    price: 449,
    category: 'Återhämtning',
    popular: true,
    specs: {
      purity: '≥98%',
      quantity: '5mg',
      form: 'Frystorkat pulver',
      storage: '-20°C',
    },
    description:
      'En av de mest populära forskningspeptiderna. Över 100 publicerade studier i prekliniska modeller. Fokusområde: återhämtningsmekanismer och tarmfunktion.',
    research:
      'Studerad i över 100 granskade publikationer. Prekliniskt fokus på vävnadsreparation, gastrointestinal funktion och biologiska reparationsmekanismer.',
    image: '/images/peptide-vial.svg',
  },
  {
    id: 'selank',
    slug: 'selank',
    name: 'Selank',
    subtitle: 'Studerad för: Stress & Kognition',
    price: 399,
    category: 'Fokus',
    popular: true,
    specs: {
      purity: '≥98%',
      quantity: '5mg',
      form: 'Frystorkat pulver',
      storage: '-20°C',
    },
    description:
      'Baserad på tuftsin, en naturlig immunpeptid. Studerad i prekliniska modeller för stressrelaterade mekanismer och kognitiv funktion. Populär inom nootropisk forskning.',
    research:
      'Undersökt i beteendemodeller för stressrelaterade mekanismer, kognition och GABAerg modulering. Studerad för BDNF-uttryck.',
    image: '/images/peptide-vial.svg',
  },
  {
    id: 'semax',
    slug: 'semax',
    name: 'Semax',
    subtitle: 'Studerad för: Kognition & Neuroprotection',
    price: 419,
    category: 'Fokus',
    popular: false,
    specs: {
      purity: '≥98%',
      quantity: '5mg',
      form: 'Frystorkat pulver',
      storage: '-20°C',
    },
    description:
      'Härledd från ACTH-fragmentet, ett naturligt hormon. Studerad för minne och kognitiv funktion i djurmodeller. Undersöks ofta i kombination med Selank i forskningslitteraturen.',
    research:
      'Studerad för neurotrofiner (BDNF/NGF), dopaminerg modulering och cerebrovaskulära mekanismer i prekliniska modeller.',
    image: '/images/peptide-vial.svg',
  },
  {
    id: 'ghk-cu',
    slug: 'ghk-cu',
    name: 'GHK-Cu',
    subtitle: 'Studerad för: Kollagen & Hudbiologi',
    price: 379,
    category: 'Anti-Aging',
    popular: true,
    specs: {
      purity: '≥98%',
      quantity: '50mg',
      form: 'Frystorkat pulver',
      storage: '2-8°C',
    },
    description:
      'En naturligt förekommande kopparpeptid vars koncentration minskar med åldern. Forskad för kollagensyntes, hudbiologi och antioxidativa mekanismer.',
    research:
      'Publicerade studier om kollagensyntes, fibroblastaktivitet och hur den påverkar över 4 000 gener kopplade till åldrandeprocesser.',
    image: '/images/peptide-vial.svg',
  },
  {
    id: 'epithalon',
    slug: 'epithalon',
    name: 'Epithalon',
    subtitle: 'Studerad för: Telomeras & Åldrande',
    price: 469,
    category: 'Anti-Aging',
    popular: false,
    specs: {
      purity: '≥98%',
      quantity: '10mg',
      form: 'Frystorkat pulver',
      storage: '-20°C',
    },
    description:
      'Undersökt i prekliniska studier för åldrandeprocesser och telomerasaktivitet. Forskad i samband med melatoninreglering i djurmodeller.',
    research:
      'Studerad för telomerasaktivering, melatoninreglering och livslängd i djurmodeller.',
    image: '/images/peptide-vial.svg',
  },
  {
    id: 'kpv',
    slug: 'kpv',
    name: 'KPV',
    subtitle: 'Studerad för: Inflammation & Immunfunktion',
    price: 389,
    category: 'Återhämtning',
    popular: false,
    specs: {
      purity: '≥98%',
      quantity: '5mg',
      form: 'Frystorkat pulver',
      storage: '-20°C',
    },
    description:
      'En tripeptid studerad i prekliniska inflammationsmodeller, med fokus på gastrointestinal funktion och immunmekanismer.',
    research:
      'Studerad för NF-κB-vägshämning, intestinala inflammationsmodeller och antimikrobiella mekanismer.',
    image: '/images/peptide-vial.svg',
  },
  {
    id: 'bacteriostatic-water',
    slug: 'bakteriostatiskt-vatten',
    name: 'Bakteriostatiskt Vatten',
    subtitle: 'Rekonstituering av peptider',
    price: 99,
    category: 'Tillbehör',
    popular: false,
    specs: {
      purity: 'USP-grad',
      quantity: '10ml',
      form: 'Vätska',
      storage: 'Rumstemperatur',
    },
    description:
      'Sterilt vatten med konserveringsmedel för rekonstituering av frystorkade peptider. Nödvändigt tillbehör för alla peptider i pulverform.',
    research: null,
    image: '/images/bac-water.svg',
  },
  {
    id: 'nasal-spray-kit',
    slug: 'nasal-spray-kit',
    name: 'Nasal Spray Kit',
    subtitle: 'Forskningsapplikation',
    price: 149,
    category: 'Tillbehör',
    popular: false,
    specs: {
      purity: null,
      quantity: '3x 10ml flaskor',
      form: 'Sprayflaskor',
      storage: 'Rumstemperatur',
    },
    description:
      'Tre graduerade sprayflaskor för nasala forskningsprotokoll. Inkluderar dokumentationsmallar.',
    research: null,
    image: '/images/nasal-kit.svg',
  },
];

export const categories = ['Alla', 'Återhämtning', 'Fokus', 'Anti-Aging', 'Tillbehör'];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id) {
  return products.find((p) => p.id === id);
}

export function getPopularProducts() {
  return products.filter((p) => p.popular);
}

export function getRelatedProducts(productId, limit = 3) {
  const product = getProductById(productId);
  if (!product) return [];
  const sameCategory = products.filter(
    (p) => p.category === product.category && p.id !== productId
  );
  const others = products.filter(
    (p) => p.category !== product.category && p.id !== productId
  );
  return [...sameCategory, ...others].slice(0, limit);
}
