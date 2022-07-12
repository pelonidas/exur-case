import React from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";
import {useAppDispatch} from "../app/hooks";
import {fetchProductsAsync} from "../features/products/productsSlice";

const Sidebar = () => {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useAppDispatch();

    const handleClick = () => {
        if (!searchValue) {
            return;
        }
        dispatch(fetchProductsAsync(searchValue));
    }
    return (
        <div className={'w-[30%]'}>
            <Paper
                component="form"
                sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
            >
                <InputBase
                    sx={{ml: 1, flex: 1}}
                    placeholder="Search for products"
                    onChange={e => setSearchValue(e.target.value)}
                    inputProps={{'aria-label': 'search products'}}
                />
                <IconButton sx={{p: '10px'}} aria-label="search" onClick={handleClick}>
                    <SearchIcon/>
                </IconButton>
            </Paper>
        </div>
    )
}
export default Sidebar;
