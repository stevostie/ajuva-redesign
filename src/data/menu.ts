export interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
  isSectionHeader?: boolean;
}

export const mainMenu: MenuItem[] = [
  { label: 'DOMOV', href: '/' },
  {
    label: 'ŠKOLENIA',
    children: [
      { label: 'Kurič I. - V. triedy', href: '/skolenia/kuric-1-5-triedy' },
      { label: 'Kurič do 100 kW', href: '/skolenia/kuric-do-100-kw' },
      { label: 'Obsluhy tlak', href: '/skolenia/obsluhy-tlak' },
      { label: 'Obsluhy plyn', href: '/skolenia/obsluhy-plyn' },
      { label: 'Opravy VTZ tlak', href: '/skolenia/opravy-vtz-tlak' },
      { label: 'Opravy VTZ plyn', href: '/skolenia/opravy-vtz-plyn' },
      { label: 'Viazač bremien', href: '/skolenia/viazac-bremien' },
      { label: 'Zdvíhacie zariadenia', href: '/skolenia/zdvihacie-zariadenia' },
      { label: 'RT VTZ - Tlak', href: '/skolenia/rt-vtz-tlak' },
      { label: 'RT VTZ - Tlak-Bane', href: '/skolenia/rt-vtz-tlak-bane' },
      { label: 'Technik BOZP', href: '/skolenia/technik-bozp' },
      { label: 'Školenie BOZP a PP', href: '/skolenia/skolenie-bozp-pp' },
      { label: 'Semináre', href: '/skolenia/seminare' },
    ]
  },
  {
    label: 'PREHLIADKY',
    children: [
      { label: 'VTZ tlakové', href: '/prehliadky/vtz-tlakove' },
      { label: 'VTZ plynové', href: '/prehliadky/vtz-plynove' },
      { label: 'Kotolne - NTLK', href: '/prehliadky/kotolne-ntlk' },
      { label: 'Vykurovacie systémy', href: '/prehliadky/vykurovacie-systemy' },
    ]
  },
  {
    label: 'BOZP & PO',
    children: [
      { label: 'Ponuka BOZP', href: '/bozp-po/ponuka-bozp' },
      { label: 'Ponuka PO', href: '/bozp-po/ponuka-po' },
    ]
  },
  {
    label: 'O NÁS',
    children: [
      { label: 'Profil spoločnosti', href: '/o-nas/profil' },
      { label: 'Oprávnenia', href: '/o-nas/opravnenia' },
      { label: 'Referencie', href: '/o-nas/referencie' },
      { label: 'Galéria', href: '/o-nas/galeria' },
    ]
  },
  {
    label: 'KONTAKT',
    children: [
      { label: 'AJUVA Š+S s.r.o.', href: '/kontakt/ajuva' },
      { label: 'Partneri', href: '/kontakt/partneri' },
    ]
  },
  {
    label: 'VIAC',
    children: [
      { label: 'PREDPISY', isSectionHeader: true },
      { label: 'Bezpečnosť práce', href: '/predpisy/bezpecnost-prace' },
      { label: 'Požiarna ochrana', href: '/predpisy/poziarna-ochrana' },
      { label: 'VTZ tlak a plyn', href: '/predpisy/vtz-tlak-plyn' },
      { label: 'Vykurovacie systémy', href: '/predpisy/vykurovacie-systemy' },
      { label: 'Zdravotná služba', href: '/predpisy/zdravotna-sluzba' },
      { label: 'STN, STN EN', href: '/predpisy/stn-stn-en' },
      { label: 'Užitočné stránky', href: '/predpisy/uzitocne-stranky' },
      { label: 'Články, stanoviská', href: '/predpisy/clanky-stanoviska' },
      { label: 'TLAČIVÁ', isSectionHeader: true },
      { label: 'Tlačivá', href: '/tlaciva/tlaciva' },
      { label: 'Príručky a brožúry', href: '/tlaciva/prirucky-brozury' },
      { label: 'Otázky - FAQ´s', href: '/tlaciva/faq' },
      { label: 'Partneri', href: '/tlaciva/partneri-tlaciva' },
      { label: 'ZÁBAVA', isSectionHeader: true },
      { label: 'Vtipy', href: '/zabava/vtipy' },
      { label: 'Múdre výroky', href: '/zabava/mudre-vyroky' },
      { label: 'Murphyho zákony', href: '/zabava/murphyho-zakony' },
      { label: 'Video výuka', href: '/zabava/video-vyuka' },
      { label: 'PONÚKAME', isSectionHeader: true },
      { label: 'Ponúkame', href: '/ponukame' },
    ]
  },
];
