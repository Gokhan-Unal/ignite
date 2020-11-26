import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { fetchSearch } from '../actions/gamesAction'
import { CLEAR_SEARCHED } from '../actions/types'
import logo from '../img/logo.svg'

const Nav = () => {
  const [textInput, setTextInput] = useState('')
  const dispatch = useDispatch()

  const inputHandler = (e) => {
    setTextInput(e.target.value)
  }

  const submitSearch = (e) => {
    e.preventDefault()
    dispatch(fetchSearch(textInput))
    setTextInput('')
  }

  const clearSearched = () => {
    dispatch({ type: CLEAR_SEARCHED })
  }

  return (
    <StyledNav>
      <Logo onClick={clearSearched}>
        <img src={logo} alt="Logo" />
        <h1>Ignite</h1>
      </Logo>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  )
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  input:active,
  input:focus {
    outline: 3px dashed goldenrod;
  }

  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    margin-left: 5px;
  }
`

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`

export default Nav
