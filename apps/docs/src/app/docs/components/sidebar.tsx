import styled from 'styled-components';

import { NavbarItem, NavbarSection } from './sidebar-components';

const SidebarWrapper = styled.div`
    width: 300px;
    height: 100%;
    position: sticky;
    padding: 30px;
    border-right: 3px solid var(--primary-token_150);
    box-sizing: border-box;
`;

const docItems: [NavbarItem] = [
    {
        link: '/docs',
        title: 'Set up',
        items: [
            {
                link: '#installation',
                title: 'Installation'
            }
        ]
    }
]

export const SideBar = () => {
    return (
        <SidebarWrapper>
            <NavbarSection title='Documentation' items={docItems} opened={true} />
        </SidebarWrapper>
    )
};
