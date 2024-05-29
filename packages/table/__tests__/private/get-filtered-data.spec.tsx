import React from 'react';

import { UiText } from '@uireact/text';

import { getFilteredData } from '../../src/private';
import { UiTableData } from '../../src/types';

const mockedStringData: UiTableData = {
    headings: [],
    items: [
        {
            id: 'item-1',
            cols: [
                'item 1'
            ]
        },
        {
            id: 'item-2',
            cols: [
                'item 2'
            ]
        }
    ]
}

const mockedNumberData: UiTableData = {
    headings: [],
    items: [
        {
            id: 'item-1',
            cols: [
                2
            ]
        },
        {
            id: 'item-2',
            cols: [
                1
            ]
        },
        {
            id: 'item-3',
            cols: [
                2
            ]
        }
    ]
}

const mockedReactNodeData: UiTableData = {
    headings: [],
    items: [
        {
            id: 'item-1',
            cols: [
                <UiText key="1">Some text</UiText>
            ]
        },
        {
            id: 'item-2',
            cols: [
                <UiText key="2">Some text</UiText>
            ]
        },
    ]
}


describe('getFilteredData', () => {
    describe('When items are string', () => {
        it('Should filter data', () => {
            const filteredData = getFilteredData(mockedStringData.items, 'item 1');

            expect(filteredData).toHaveLength(1);
            expect(filteredData[0].id).toBe('item-1');
        });    
    });

    describe('When items are number', () => {
        it('Should filter data', () => {
            const filteredData = getFilteredData(mockedNumberData.items, '2');

            expect(filteredData).toHaveLength(2);
            expect(filteredData[0].id).toBe('item-1'); // Value 2
            expect(filteredData[1].id).toBe('item-3'); // Value 2
        });    
    });

    describe('When items are React nodes', () => {
        it('Should filter all data as react nodes can not be compared', () => {
            const filteredData = getFilteredData(mockedReactNodeData.items, 'Nothing');

            expect(filteredData).toHaveLength(0);
        });    
    });
});
