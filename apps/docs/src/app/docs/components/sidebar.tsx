import { useCallback, useState } from 'react';
import styled from 'styled-components';

import { NavbarSection } from './sidebar-components';
import { ChartsSideBarData, ComponentsSideBarData, FormsSideBarData, FoundationSideBarData, FramerAnimationsSidebarData, GridsSideBarData, TypographySideBarData, UtilsSideBarData, ViewSideBarData } from './sidebar-data';
import { DialogsSideBarData } from './sidebar-data/dialogs';


const SidebarWrapper = styled.div<{ $isFloatingNavbar?: boolean }>`
    ${(props) => `
        ${props.$isFloatingNavbar ? `
            text-align: center;
        `: `
            width: 300px;
            height: 100%;
            padding: 30px;
            box-sizing: border-box;
            border-right: 3px solid var(--primary-token_150);
        `}
    `}
`;

const SidebarInnerContent = styled.div`
    position: sticky;
    top: 60px;
`;

type SideBarProps = {
    isFloatingNavbar?: boolean;
};

export const SideBar = ({ isFloatingNavbar }: SideBarProps) => {
    const [selected, setSelected] = useState(0);

    const onSelectMenu = useCallback((id: number) => {
        if (selected === id) {
            setSelected(0);
        } else {
            setSelected(id);
        }
    }, [setSelected, selected]);

    return (
        <SidebarWrapper $isFloatingNavbar={isFloatingNavbar}>
            <SidebarInnerContent>
                <NavbarSection title='Components' icon='Layers' items={ComponentsSideBarData} isFloatingNavbar={isFloatingNavbar} onSelectMenu={onSelectMenu} id={1} selected={selected} />
                <NavbarSection title='Charts' icon='ChartHistogram' items={ChartsSideBarData} isFloatingNavbar={isFloatingNavbar} onSelectMenu={onSelectMenu} id={2} selected={selected} />
                <NavbarSection title='Dialogs' icon='CheckComment' items={DialogsSideBarData} isFloatingNavbar={isFloatingNavbar} onSelectMenu={onSelectMenu} id={3} selected={selected} />
                <NavbarSection title='Framer Animations' icon='Party' items={FramerAnimationsSidebarData} isFloatingNavbar={isFloatingNavbar} onSelectMenu={onSelectMenu} id={10} selected={selected} />
                <NavbarSection title='Forms' icon='EditSquare' items={FormsSideBarData} isFloatingNavbar={isFloatingNavbar} onSelectMenu={onSelectMenu} id={4} selected={selected} />
                <NavbarSection title='Foundation' icon='LayoutFluid' items={FoundationSideBarData} isFloatingNavbar={isFloatingNavbar} onSelectMenu={onSelectMenu} id={5} selected={selected} />
                <NavbarSection title='Grids' icon='LayoutGrid' items={GridsSideBarData} isFloatingNavbar={isFloatingNavbar} onSelectMenu={onSelectMenu} id={6} selected={selected} />
                <NavbarSection title='Typography' icon='Edit' items={TypographySideBarData} isFloatingNavbar={isFloatingNavbar} onSelectMenu={onSelectMenu} id={7} selected={selected} />
                <NavbarSection title='Utils' icon='Settings' items={UtilsSideBarData} isFloatingNavbar={isFloatingNavbar} onSelectMenu={onSelectMenu} id={8} selected={selected} />
                <NavbarSection title='Main View' icon='Computer' items={ViewSideBarData} isFloatingNavbar={isFloatingNavbar} onSelectMenu={onSelectMenu} id={9} selected={selected} />
            </SidebarInnerContent>
        </SidebarWrapper>
    )
};
