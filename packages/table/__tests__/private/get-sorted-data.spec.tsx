import React from 'react';

import { UiText } from '@uireact/text';

import { getSortedData } from '../../src/private';
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

describe('getSortedData', () => {
    it('Should return the same order when cols index is null', () => {
        const result = getSortedData(mockedStringData.items, 'DOWN', null);
    
        expect(result[0].id).toBe('item-1');
        expect(result[1].id).toBe('item-2');
    });

    describe('When cols are string', () => {
        it('Should sort data when orientation is upwards', () => {
            const result = getSortedData(mockedStringData.items, 'UP', 0);
    
            expect(result[0].id).toBe('item-1');
            expect(result[1].id).toBe('item-2');
        });
    
        it('Should sort data when orientation is downwards', () => {
            const result = getSortedData(mockedStringData.items, 'DOWN', 0);
    
            expect(result[0].id).toBe('item-2');
            expect(result[1].id).toBe('item-1');
        });
    });

    describe('When cols are number', () => {
        it('Should sort data when orientation is upwards', () => {
            const result = getSortedData(mockedNumberData.items, 'UP', 0);
    
            expect(result[0].id).toBe('item-2'); // value 1
            expect(result[1].id).toBe('item-1'); // value 2
            expect(result[2].id).toBe('item-3'); // value 2
        });
    
        it('Should sort data when orientation is downwards', () => {
            const result = getSortedData(mockedNumberData.items, 'DOWN', 0);
    
            expect(result[0].id).toBe('item-1'); // value 2
            expect(result[1].id).toBe('item-3'); // value 2
            expect(result[2].id).toBe('item-2'); // value 1
        });
    });

    describe('When cols are React Node', () => {
        it('Should get same order as can not compare react nodes', () => {
            const result = getSortedData(mockedReactNodeData.items, 'DOWN', 0);
    
            expect(result[0].id).toBe('item-1');
            expect(result[1].id).toBe('item-2');
        });
    });
});
