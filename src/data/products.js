export const products = [
  {
    id: 'bpc-157',
    slug: 'bpc-157',
    name: 'BPC-157',
    subtitle: 'Kroppsskyddande Förening',
    price: 449,
    category: 'Återhämtning',
    popular: true,
    specs: {
      purity: '≥98%',
      quantity: '5mg',
      form: 'Lyofiliserat pulver',
      storage: '-20°C',
    },
    description:
      'En syntetisk pentadekapeptid som studerats omfattande i forskningsmiljöer för sin roll inom vävnadsreparation, gastrointestinal funktion och sårläkningsprocesser.',
    research:
      'Över 100 granskade studier om vävnadsregeneration, angiogenes och cytoprotektiva mekanismer.',
    image: '/images/peptide-vial.svg',
  },
  {
    id: 'selank',
    slug: 'selank',
    name: 'Selank',
    subtitle: 'Nootropisk Heptapeptid',
    price: 399,
    category: 'Nootropisk',
    popular: true,
    specs: {
      purity: '≥98%',
      quantity: '5mg',
      form: 'Lyofiliserat pulver',
      storage: '-20°C',
    },
    description:
      'En syntetisk analog av den immunmodulerande peptiden tuftsin, som utforskats för anxiolytiska och nootropiska egenskaper i laboratoriemiljö.',
    research:
      'Studerad för GABAerg modulering, BDNF-uttryck och serotoninmetabolism i prekliniska modeller.',
    image: '/images/peptide-vial.svg',
  },
  {
    id: 'semax',
    slug: 'semax',
    name: 'Semax',
    subtitle: 'Neuropeptid ACTH-fragment',
    price: 419,
    category: 'Nootropisk',
    popular: false,
    specs: {
      purity: '≥98%',
      quantity: '5mg',
      form: 'Lyofiliserat pulver',
      storage: '-20°C',
    },
    description:
      'En syntetisk peptid härledd från ACTH (4-10), undersökt för kognitiv förbättring och neuroprotektiva mekanismer i forskningsmiljöer.',
    research:
      'Preklinisk data om BDNF/NGF-uppreglering, dopaminerg modulering och cerebrovaskulära effekter.',
    image: '/images/peptide-vial.svg',
  },
  {
    id: 'ghk-cu',
    slug: 'ghk-cu',
    name: 'GHK-Cu',
    subtitle: 'Kopparpeptidkomplex',
    price: 379,
    category: 'Anti-Aging',
    popular: true,
    specs: {
      purity: '≥98%',
      quantity: '50mg',
      form: 'Lyofiliserat pulver',
      storage: '2-8°C',
    },
    description:
      'En naturligt förekommande kopparbindande tripeptid som utforskats för sina effekter på kollagensyntes, hudombildning och antioxidant genuttryck.',
    research:
      'Publicerade studier om accelererad sårläkning, fibroblaststimulering och modulering av genuttryck.',
    image: '/images/peptide-vial.svg',
  },
  {
    id: 'epithalon',
    slug: 'epithalon',
    name: 'Epithalon',
    subtitle: 'Telomerasaktivator',
    price: 469,
    category: 'Anti-Aging',
    popular: false,
    specs: {
      purity: '≥98%',
      quantity: '10mg',
      form: 'Lyofiliserat pulver',
      storage: '-20°C',
    },
    description:
      'En syntetisk tetrapeptid baserad på naturligt epithalamin, studerad för sin potentiella roll i telomerasaktivering och tallkörtelns funktion.',
    research:
      'Forskning om telomerförlängning, melatoninreglering och livslängdsförlängning i djurmodeller.',
    image: '/images/peptide-vial.svg',
  },
  {
    id: 'kpv',
    slug: 'kpv',
    name: 'KPV',
    subtitle: 'Antiinflammatorisk Tripeptid',
    price: 389,
    category: 'Återhämtning',
    popular: false,
    specs: {
      purity: '≥98%',
      quantity: '5mg',
      form: 'Lyofiliserat pulver',
      storage: '-20°C',
    },
    description:
      'Ett tripeptidfragment av alfa-MSH som utforskats för antiinflammatoriska egenskaper och mukosal immunmodulering i prekliniska miljöer.',
    research:
      'Studier om NF-κB-vägshämning, intestinala inflammationsmodeller och antimikrobiell aktivitet.',
    image: '/images/peptide-vial.svg',
  },
  {
    id: 'bacteriostatic-water',
    slug: 'bakteriostatiskt-vatten',
    name: 'Bakteriostatiskt Vatten',
    subtitle: 'Rekonstituering',
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
      'Sterilt vatten med 0,9% bensylalkohol för rekonstituering av lyofiliserade forskningspeptider.',
    research: null,
    image: '/images/bac-water.svg',
  },
  {
    id: 'nasal-spray-kit',
    slug: 'nasal-spray-kit',
    name: 'Nasal Spray Kit',
    subtitle: 'Forskningsapplikationskit',
    price: 149,
    category: 'Tillbehör',
    popular: false,
    specs: {
      purity: null,
      quantity: '3x 10ml flaskor',
      form: 'Sprayapparat',
      storage: 'Rumstemperatur',
    },
    description:
      'Komplett nasalsprayapparat för intranasala forskningsapplikationer. Inkluderar graderad sprayflaska och dokumentationsmallar.',
    research: null,
    image: '/images/nasal-kit.svg',
  },
];

export const categories = ['Alla', 'Återhämtning', 'Nootropisk', 'Anti-Aging', 'Tillbehör'];

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
