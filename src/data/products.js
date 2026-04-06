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
    science: {
      cas: '137525-51-0',
      formula: 'C62H98N16O22',
      molarMass: '1419.53 g/mol',
      sequence: 'Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val',
      shelfLife: '36 månader (oöppnad)',
    },
    description:
      'En av de mest populära forskningspeptiderna. Över 100 publicerade studier i prekliniska modeller. Fokusområde: återhämtningsmekanismer och tarmfunktion.',
    research:
      'Studerad i över 100 granskade publikationer. Prekliniskt fokus på vävnadsreparation, gastrointestinal funktion och biologiska reparationsmekanismer.',
    image: '/images/product-bpc157.svg',
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
    science: {
      cas: '129954-34-3',
      formula: 'C33H57N11O9',
      molarMass: '751.87 g/mol',
      sequence: 'Thr-Lys-Pro-Arg-Pro-Gly-Pro',
      shelfLife: '36 månader (oöppnad)',
    },
    description:
      'Baserad på tuftsin, en naturlig immunpeptid. Studerad i prekliniska modeller för stressrelaterade mekanismer och kognitiv funktion. Populär inom nootropisk forskning.',
    research:
      'Undersökt i beteendemodeller för stressrelaterade mekanismer, kognition och GABAerg modulering. Studerad för BDNF-uttryck.',
    image: '/images/product-selank.svg',
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
    science: {
      cas: '80714-61-0',
      formula: 'C37H51N9O10S',
      molarMass: '813.92 g/mol',
      sequence: 'Met-Glu-His-Phe-Pro-Gly-Pro',
      shelfLife: '36 månader (oöppnad)',
    },
    description:
      'Härledd från ACTH-fragmentet, ett naturligt hormon. Studerad för minne och kognitiv funktion i djurmodeller. Undersöks ofta i kombination med Selank i forskningslitteraturen.',
    research:
      'Studerad för neurotrofiner (BDNF/NGF), dopaminerg modulering och cerebrovaskulära mekanismer i prekliniska modeller.',
    image: '/images/product-semax.svg',
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
    science: {
      cas: '49557-75-7',
      formula: 'C14H23CuN6O4',
      molarMass: '403.92 g/mol',
      sequence: 'Gly-His-Lys:Cu²⁺',
      shelfLife: '24 månader (oöppnad)',
    },
    description:
      'En naturligt förekommande kopparpeptid vars koncentration minskar med åldern. Forskad för kollagensyntes, hudbiologi och antioxidativa mekanismer.',
    research:
      'Publicerade studier om kollagensyntes, fibroblastaktivitet och hur den påverkar över 4 000 gener kopplade till åldrandeprocesser.',
    image: '/images/product-ghkcu.svg',
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
    science: {
      cas: '307297-39-8',
      formula: 'C14H22N4O9',
      molarMass: '390.35 g/mol',
      sequence: 'Ala-Glu-Asp-Gly',
      shelfLife: '36 månader (oöppnad)',
    },
    description:
      'Undersökt i prekliniska studier för åldrandeprocesser och telomerasaktivitet. Forskad i samband med melatoninreglering i djurmodeller.',
    research:
      'Studerad för telomerasaktivering, melatoninreglering och livslängd i djurmodeller.',
    image: '/images/product-epithalon.svg',
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
    science: {
      cas: '67727-97-3',
      formula: 'C16H30N4O4',
      molarMass: '342.43 g/mol',
      sequence: 'Lys-Pro-Val',
      shelfLife: '36 månader (oöppnad)',
    },
    description:
      'En tripeptid studerad i prekliniska inflammationsmodeller, med fokus på gastrointestinal funktion och immunmekanismer.',
    research:
      'Studerad för NF-κB-vägshämning, intestinala inflammationsmodeller och antimikrobiella mekanismer.',
    image: '/images/product-kpv.svg',
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
    science: null,
    description:
      'Sterilt vatten med konserveringsmedel för rekonstituering av frystorkade peptider. Nödvändigt tillbehör för alla peptider i pulverform.',
    research: null,
    image: '/images/bac-water.svg',
  },
  {
    id: 'nasal-spray-kit',
    slug: 'nasal-spray-kit',
    name: 'Sprayflask-kit',
    subtitle: 'Laboratorieutrustning',
    price: 149,
    category: 'Tillbehör',
    popular: false,
    specs: {
      purity: null,
      quantity: '3x 10ml flaskor',
      form: 'Sprayflaskor',
      storage: 'Rumstemperatur',
    },
    science: null,
    description:
      'Tre graduerade sprayflaskor avsedda som laboratorieutrustning för lösningshantering. Inkluderar dokumentationsmallar.',
    research: null,
    image: '/images/nasal-kit.svg',
  },
];

export const categories = ['Alla', 'Återhämtning', 'Fokus', 'Anti-Aging', 'Tillbehör'];

export const volumeDiscounts = [
  { minQty: 3, discount: 5, label: '3+ st = 5% rabatt' },
  { minQty: 5, discount: 10, label: '5+ st = 10% rabatt' },
];

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
