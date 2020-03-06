export interface NavigationItem
{
    id: number;
    title: string;
    url?: any;
    type: 'item' | 'group' | 'collapsable';
    icon?: string;
    hidden?: boolean;
    openInNewTab?: boolean;
    badge?: {
        title?: string;
        background?: string;
        foreground?: string;
    };
}

export interface Navigation extends NavigationItem
{
    children?: NavigationItem[];
}
