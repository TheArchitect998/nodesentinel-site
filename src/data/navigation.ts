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
