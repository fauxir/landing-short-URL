import  { configureStore } from '@reduxjs/toolkit'
import dataList from './dataListSlice'


export default configureStore({
    reducer:{
        dataList: dataList, 
    }
})

