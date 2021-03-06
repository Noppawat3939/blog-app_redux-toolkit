import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { sub } from "date-fns";

const initialState = [
 {
    id: 1,
    title: 'Learning Redux Toolkit',
    content: "I've heard good things.",
    date: sub(new Date(), {minutes: 10}).toISOString(),
    reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }
 },
 {
    id: 2,
    title: 'Slices...',
    content: "The more I say slice, the more I want pizza.",
    date: sub(new Date(), {minutes: 5}).toISOString(),
    reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }
 }
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userID) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userID,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }                    
                    }
                }
            }
        },
         reactionAdd: (state, action) => {
            const {reaction, postId} = action.payload;
            const existingPost = state.find((post) => post.id === postId)
            if(existingPost) {
                existingPost.reactions[reaction]++;
            }
        }
    }
});

export const selectAllPosts = (state) => state.posts;

export const {addPost, reactionAdd} = postSlice.actions;

export default postSlice.reducer;