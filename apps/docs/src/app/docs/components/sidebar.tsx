import styled from 'styled-components';

import { NavbarSection } from './sidebar-components';
import { ChartsSideBarData, ComponentsSideBarData, FormsSideBarData, FoundationSideBarData, GridsSideBarData, TypographySideBarData, UtilsSideBarData, ViewSideBarData } from './sidebar-data';

const SidebarWrapper = styled.div`
    width: 300px;
    height: 100%;
    position: sticky;
    padding: 30px;
    border-right: 3px solid var(--primary-token_150);
    box-sizing: border-box;
`;

export const SideBar = () => {
    return (
        <SidebarWrapper>
            <NavbarSection title='Components' items={ComponentsSideBarData} />
            <NavbarSection title='Charts' items={ChartsSideBarData} />
            <NavbarSection title='Forms' items={FormsSideBarData} />
            <NavbarSection title='Foundation' items={FoundationSideBarData} />
            <NavbarSection title='Grids' items={GridsSideBarData} />
            <NavbarSection title='Typography' items={TypographySideBarData} />
            <NavbarSection title='Utils' items={UtilsSideBarData} />
            <NavbarSection title='Main View' items={ViewSideBarData} />
        </SidebarWrapper>
    )
};
