import { Menu } from './menu';
import { Breadcrumb } from './breadcrumb';
import { Copyright } from './copyright';

export interface Layout
{
    layout: {
        customClass: string,
        navbar: {
            backgroundPrimary: string,
            backgroundSecondary: string,
            color: string,
            hidden: boolean,
            folded: boolean,
            props?: {
                menu: Menu[]
            }
        },
        breadcrumb: {
            backgroundPrimary: string,
            color: string,
            hidden: boolean,
            props?: Breadcrumb[]
        }
        footer: {
            backgroundPrimary: string,
            color: string,
            hidden: boolean,
            props?: {
                copyright?: Copyright
            }
        }
    };
}
