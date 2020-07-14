import React from 'react';
import { IFilterBar } from '../../models/IFilterBar'
import {
    StyledFilterBarLayout,
    StyledFilterBarRow,
    StyledFilterBarControl,
    StyledFilterBarDropdown,
    StyledFilterBarHeader,
    StyledFilterBarPageResult
} from '../FilterBar/FilterBar.styled'
const FilterBar: React.FC<IFilterBar> = () => {
    return <>
        <StyledFilterBarLayout>
            <StyledFilterBarRow>
                <StyledFilterBarPageResult></StyledFilterBarPageResult>
                <StyledFilterBarControl>
                    <StyledFilterBarHeader>
                        <StyledFilterBarDropdown>
                            <select>
                                <option value="default">Default</option>
                                <option value="priceHighToLow">Price - High to Low</option>
                                <option value="priceLowToHigh">Price - Low to High</option>
                            </select>
                        </StyledFilterBarDropdown>
                    </StyledFilterBarHeader>
                </StyledFilterBarControl>
            </StyledFilterBarRow>
        </StyledFilterBarLayout>
    </>
}
export default FilterBar
