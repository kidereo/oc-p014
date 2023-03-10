import {DataGrid, gridClasses} from '@mui/x-data-grid';
import {alpha, styled} from '@mui/material/styles';

/**
 * Style a striped data grid.
 *
 * @type {number}
 * @type {StyledComponent<Omit<Partial<DataGridPropsWithDefaultValues> & DataGridPropsWithComplexDefaultValueBeforeProcessing & DataGridPropsWithoutDefaultValue<R>, DataGridForcedPropsKey> & {pagination?: true} & React.RefAttributes<HTMLDivElement> & MUIStyledCommonProps<Theme>, {}, {}>}
 */
const ODD_OPACITY = 0.2;
const StripedDataGrid = styled(DataGrid)(({theme}) => ({
    [`& .${gridClasses.row}.even`]: {
        //backgroundColor: theme.palette.grey[200],
        backgroundColor: alpha('#9eb546', ODD_OPACITY),
        '&:hover, &.Mui-hovered': {
            //backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
            backgroundColor: alpha('#3e5800', ODD_OPACITY),
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
        '&.Mui-selected': {
            backgroundColor: alpha(
                //theme.palette.primary.main,
                '#3e5800',
                ODD_OPACITY + theme.palette.action.selectedOpacity,
            ),
            '&:hover, &.Mui-hovered': {
                backgroundColor: alpha(
                    //theme.palette.primary.main,
                    '#3e5800',
                    ODD_OPACITY +
                    theme.palette.action.selectedOpacity +
                    theme.palette.action.hoverOpacity,
                ),
                // Reset on touch devices, it doesn't add specificity
                '@media (hover: none)': {
                    backgroundColor: alpha(
                        //theme.palette.primary.main,
                        '#3e5800',
                        ODD_OPACITY + theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    },
}));

export default StripedDataGrid;