export const localizedRoutes = [
  ['/', '/en/'],
  ['/docs/', '/en/docs/'],
  ['/docs/schnellstart/', '/en/docs/quick-start/'],
  ['/docs/docker/', '/en/docs/docker/'],
  ['/docs/nativ/', '/en/docs/native/'],
  ['/docs/reverse-proxy/', '/en/docs/reverse-proxy/'],
  ['/docs/konfiguration/', '/en/docs/configuration/'],
  ['/docs/benachrichtigungen/', '/en/docs/notifications/'],
  ['/docs/sicherheit/', '/en/docs/security/'],
  ['/docs/aktualisierung/', '/en/docs/updates/'],
  ['/docs/fehlerbehebung/', '/en/docs/troubleshooting/'],
  ['/impressum/', '/en/imprint/'],
  ['/datenschutz/', '/en/privacy/'],
] as const;

export function getAlternatePath(path: string, language: 'de' | 'en') {
  const pair = localizedRoutes.find(([german, english]) =>
    language === 'de' ? english === path : german === path
  );

  return pair?.[language === 'de' ? 0 : 1] ?? (language === 'de' ? '/' : '/en/');
}
