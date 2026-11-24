export interface NavigationItem {
  href: string;
  label: string;
  description?: string;
}

export interface NavigationGroup {
  label: string;
  items: NavigationItem[];
}

export const docsNavigation: NavigationGroup[] = [
  {
    label: 'Erste Schritte',
    items: [
      { href: '/docs/', label: 'Überblick' },
      { href: '/docs/schnellstart/', label: 'Schnellstart' },
    ],
  },
  {
    label: 'Installation',
    items: [
      { href: '/docs/docker/', label: 'Docker Compose' },
      { href: '/docs/nativ/', label: 'Nativ & systemd' },
      { href: '/docs/reverse-proxy/', label: 'HTTPS & Reverse Proxy' },
    ],
  },
  {
    label: 'Betrieb',
    items: [
      { href: '/docs/konfiguration/', label: 'Konfiguration' },
      { href: '/docs/benachrichtigungen/', label: 'Benachrichtigungen' },
      { href: '/docs/sicherheit/', label: 'Sicherheit' },
      { href: '/docs/aktualisierung/', label: 'Aktualisierung' },
      { href: '/docs/fehlerbehebung/', label: 'Fehlerbehebung' },
    ],
  },
];

export const flatDocsNavigation = docsNavigation.flatMap((group) => group.items);

export const englishDocsNavigation: NavigationGroup[] = [
  {
    label: 'Getting started',
    items: [
      { href: '/en/docs/', label: 'Overview' },
      { href: '/en/docs/schnellstart/', label: 'Quick start' },
    ],
  },
  {
    label: 'Installation',
    items: [
      { href: '/en/docs/docker/', label: 'Docker Compose' },
      { href: '/en/docs/nativ/', label: 'Native & systemd' },
      { href: '/en/docs/reverse-proxy/', label: 'HTTPS & Reverse Proxy' },
    ],
  },
  {
    label: 'Operations',
    items: [
      { href: '/en/docs/konfiguration/', label: 'Configuration' },
      { href: '/en/docs/benachrichtigungen/', label: 'Notifications' },
      { href: '/en/docs/sicherheit/', label: 'Security' },
      { href: '/en/docs/aktualisierung/', label: 'Updates' },
      { href: '/en/docs/fehlerbehebung/', label: 'Troubleshooting' },
    ],
  },
];

export const flatEnglishDocsNavigation = englishDocsNavigation.flatMap((group) => group.items);
