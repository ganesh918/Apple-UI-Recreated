const LINK_PATTERN =
  /((?:https?:\/\/)?(?:support\.)?apple\.com(?:\/[^\s,)]+)?|support\.apple\.com\/[^\s,)]+)/gi;

export function FooterNoteText({ text }: { text: string }) {
  const parts = text.split(LINK_PATTERN);

  return (
    <>
      {parts.map((part, index) => {
        if (index % 2 === 1) {
          const href = part.startsWith('http') ? part : `https://${part.replace(/^\/\//, '')}`;
          return (
            <a key={`${part}-${index}`} href={href} className="site-footer__note-link">
              {part}
            </a>
          );
        }

        return <span key={`${index}-${part.slice(0, 24)}`}>{part}</span>;
      })}
    </>
  );
}
