import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        
        event.preventDefault()
        dispatch(setNotification('New anecdote added!',5))
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        
    }
    return(
        <form onSubmit={addAnecdote}>
            <input name="anecdote" />
            <button type="submit">add</button>
        </form>
    )
}

export default AnecdoteForm