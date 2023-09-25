import { ReactComponent as ScheduleIcon } from 'src/assets/images/Schedule.svg';
import { ReactComponent as AnalyticsIcon } from 'src/assets/images/Analytics.svg';
import { ReactComponent as StoriesIcon } from 'src/assets/images/Stories.svg';
import { ReactComponent as EngagementIcon } from 'src/assets/images/Engagement.svg';
import { ReactComponent as AdsIcon } from 'src/assets/images/Ads.svg';
import { ReactComponent as CmsIcon } from 'src/assets/images/Cms.svg';
import { ReactComponent as RolesIcon } from 'src/assets/images/Roles.svg';
import { ReactComponent as AppsIcon } from 'src/assets/images/Apps.svg';
import { ReactComponent as HelpIcon } from 'src/assets/images/Help.svg';




export type MenuItemT = {
    title: string,
    path: string,
    Icon: React.FC<React.SVGProps<SVGSVGElement>>,
};

export const MENU_CONFIG: MenuItemT[][] = [
    [
        {
            title: 'Schedule',
            path: '/schedule',
            Icon: ScheduleIcon,
        },
        {
            title: 'Analytics',
            path: '/analytics',
            Icon: AnalyticsIcon,
        },
        {
            title: 'Stories',
            path: '/stories',
            Icon: StoriesIcon,
        },
        {
            title: 'Engagement Units',
            path: '/engagement-units',
            Icon: EngagementIcon,
        },
        {
            title: 'Ads',
            path: '/ads',
            Icon: AdsIcon,
        },     
    ],
    [
        {
            title: 'CMS Users',
            path: '/cms-users',
            Icon: CmsIcon,
        },
        {
            title: 'Roles',
            path: '/roles',
            Icon: RolesIcon,
        },
        {
            title: 'Apps',
            path: '/apps',
            Icon: AppsIcon,
        },
    ],
    [
        {
            title: 'User guide',
            path: '/user-guide',
            Icon: HelpIcon,
        },
    ]
];