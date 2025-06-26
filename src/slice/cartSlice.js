import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    totalItems: localStorage.getItem('totalItems') ? JSON.parse(localStorage.getItem("totalItems")) : 0,
    items: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [],
    total: localStorage.getItem('total') ? JSON.parse(localStorage.getItem('total')) : 0
}
const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        AddToCart(state, value) {
            const course = value.payload;

            // The findIndex() method returns -1 if no match is found.
            const index = state.items.findIndex((item) => item.id === course.id);

            if (index >= 0) {
                toast.error("Course is already in Cart")
                return;
            }

            state.items.push(value.payload)
            state.totalItems++
            state.total += course.price;

            localStorage.setItem('items', JSON.stringify(state.items));
            localStorage.setItem('totalItems', JSON.stringify(state.totalItems))
            localStorage.setItem('total', JSON.stringify(state.total));
            
            toast.success("course is Added In Cart")
        },
        RemoveToCart(state, value) {
            const courseId = value.payload;
            // The findIndex() method returns -1 if no match is found.
            //it return item of index
            const index = state.items.findIndex((item) => item._id === courseId);
            state.items = state.items.filter((item)=> item.id != courseId);
            // state.totalItems = 0;
            // console.log(index)
            // console.log(state.items)
         

            //     state.total =  0;
            //     state.items.splice(index,1);
            if(index >= 0){
                state.totalItems--;
                console.log(state.items[index])
                state.total -=  state.items[index].price;
                state.items.splice(index,1);

                localStorage.setItem('items', JSON.stringify(state.items));
                localStorage.setItem('totalItems', JSON.stringify(state.totalItems))
                localStorage.setItem('total', JSON.stringify(state.total));
            
                toast.success("Course is Removed From Cart !!");
            }


        },
        ResetCart(state, value) {
            state.items = [];
            localStorage.removeItem('total');
            localStorage.removeItem('items');
            localStorage.removeItem('totalItems')
        }
    }
})

export default cartSlice.reducer;
export const { setTotalItems, AddToCart, RemoveToCart, ResetCart } = cartSlice.actions;