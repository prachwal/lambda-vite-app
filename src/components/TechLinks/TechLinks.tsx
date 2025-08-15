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
 * Renders a list of technical/documentation links with modern styling.
 */
export const TechLinks: FunctionalComponent<TechLinksProps> = ({
    links,
    layout = 'column'
}) => {
    const isRow = layout === 'row';

    return (
        <nav aria-label="Technical links" class="tech-links">
            <ul
                class={`tech-links-list ${isRow ? 'flex flex-row gap-md' : 'flex flex-col gap-sm'}`}
                style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    flexWrap: isRow ? 'wrap' : undefined,
                    justifyContent: isRow ? 'center' : undefined,
                }}
            >
                {links.map((link, index) => (
                    <li
                        key={link.url}
                        class="tech-link-item animate-fade-in"
                        style={{
                            animationDelay: `${index * 0.1}s`,
                        }}
                    >
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn btn-ghost btn-sm tech-link"
                            style={{
                                minWidth: isRow ? '120px' : 'auto',
                                textAlign: 'center',
                                border: '1px solid var(--color-border-primary)',
                                borderRadius: 'var(--radius-lg)',
                                padding: 'var(--space-sm) var(--space-md)',
                                transition: 'var(--transition-all)',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            onMouseEnter={(e) => {
                                const target = e.target as HTMLElement;
                                target.style.transform = 'translateY(-2px)';
                                target.style.boxShadow = 'var(--shadow-md)';
                            }}
                            onMouseLeave={(e) => {
                                const target = e.target as HTMLElement;
                                target.style.transform = 'translateY(0)';
                                target.style.boxShadow = 'none';
                            }}
                        >
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};