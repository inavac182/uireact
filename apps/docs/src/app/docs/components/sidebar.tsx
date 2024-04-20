import { UiText } from '@uireact/text';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
    width: 300px;
    height: 100%;
    position: sticky;
    border-right: 3px solid var(--primary-token_150);
`;

export const SideBar = () => {
    return (
        <SidebarWrapper>
            <UiText>Side bar</UiText>
        </SidebarWrapper>
    )
}