export const products = [
  {
    id: 'bpc-157',
    slug: 'bpc-157',
    name: 'BPC-157',
    subtitle: 'Återhämtning & Tarmhälsa',
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
      'En av de mest populära forskningspeptiderna. Över 100 publicerade studier. Fokusområde: återhämtning, tarmhälsa och läkningsprocesser.',
    research:
      'Studerad i över 100 forskningsartiklar. Fokus på återhämtning efter skador, tarmfunktion och kroppens naturliga läkningsprocesser.',
    image: '/images/peptide-vial.svg',
  },
  {
    id: 'selank',
    slug: 'selank',
    name: 'Selank',
    subtitle: 'Stress & Fokus',
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
      'Forskad för stress och fokus. Baserad på kroppens eget immunsystem. Populär inom nootropisk forskning för sitt breda användningsområde.',
    research:
      'Undersökt för stresshantering, fokus och hur hjärnan bearbetar information. Studerad i samband med GABA-systemet och BDNF.',
    image: '/images/peptide-vial.svg',
  },
  {
    id: 'semax',
    slug: 'semax',
    name: 'Semax',
    subtitle: 'Hjärna & Minne',
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
      'Forskad för minne och kognitiv funktion. Kommer från en del av ett naturligt hormon i kroppen. Ofta kombinerad med Selank.',
    research:
      'Studerad för hjärnans tillväxtfaktorer (BDNF/NGF), dopaminsystemet och blodcirkulation i hjärnan.',
    image: '/images/peptide-vial.svg',
  },
  {
    id: 'ghk-cu',
    slug: 'ghk-cu',
    name: 'GHK-Cu',
    subtitle: 'Hud & Anti-Aging',
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
      'En naturlig kopparpeptid som finns i kroppen. Minskar med åldern. Forskad för hudföryngring, kollagen och antioxidanter.',
    research:
      'Studerad för kollagenproduktion, hudreparation och hur den påverkar över 4 000 gener kopplade till åldrande.',
    image: '/images/peptide-vial.svg',
  },
  {
    id: 'epithalon',
    slug: 'epithalon',
    name: 'Epithalon',
    subtitle: 'Livslängd & Sömn',
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
      'Forskad för åldrande och livslängd. Kopplad till telomerer — "ändarna" på vårt DNA som förkortas med åldern. Studerad för sömn och melatonin.',
    research:
      'Undersökt för telomerasaktivering, melatoninreglering och livslängd i djurstudier.',
    image: '/images/peptide-vial.svg',
  },
  {
    id: 'kpv',
    slug: 'kpv',
    name: 'KPV',
    subtitle: 'Inflammation & Mage',
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
      'En kort peptid forskad för inflammation, särskilt i mage och tarm. Populär bland de som forskar på tarmhälsa och immunsvar.',
    research:
      'Studerad för inflammation i tarmen, immunsystemet och antimikrobiella egenskaper.',
    image: '/images/peptide-vial.svg',
  },
  {
    id: 'bacteriostatic-water',
    slug: 'bakteriostatiskt-vatten',
    name: 'Bakteriostatiskt Vatten',
    subtitle: 'Blandningsvatten',
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
      'Sterilt vatten för att blanda peptider. Innehåller konserveringsmedel så det håller längre. Behövs för alla peptider i pulverform.',
    research: null,
    image: '/images/bac-water.svg',
  },
  {
    id: 'nasal-spray-kit',
    slug: 'nasal-spray-kit',
    name: 'Nasal Spray Kit',
    subtitle: 'Nässpray-kit',
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
      'Tre tomma sprayflaskor för nässpray. Perfekt för Selank och Semax. Inkluderar graderade flaskor och dokumentation.',
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
