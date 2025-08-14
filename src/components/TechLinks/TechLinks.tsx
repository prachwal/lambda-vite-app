import type { FunctionalComponent } from 'preact';

export interface TechLink {
    label: string;
    url: string;
}

export type TechLinksLayout = 'column' | 'row';

export interface TechLinksProps {
    links: TechLink[];
    layout?: TechLinksLayout;
}

/**
 * Renders a list of technical/documentation links.
 */
export const TechLinks: FunctionalComponent<TechLinksProps> = ({ links, layout = 'column' }) => (
    <nav aria-label="Technical links" style={{ margin: '2em 0' }}>
        <ul
            style={{
                listStyle: 'none',
                padding: 0,
                display: layout === 'row' ? 'flex' : 'block',
                gap: layout === 'row' ? '1em' : undefined,
                flexWrap: layout === 'row' ? 'wrap' : undefined,
            }}
        >
            {links.map((link) => (
                <li
                    key={link.url}
                    style={{
                        marginBottom: layout === 'column' ? '0.5em' : undefined,
                        marginRight: layout === 'row' ? '1em' : undefined,
                    }}
                >
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#646cff', fontWeight: 500 }}
                    >
                        {link.label}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
);
