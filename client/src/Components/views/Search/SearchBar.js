import React, { Component } from 'react'
import styled from 'styled-components'
import $ from 'jquery'
export default class SearchBar extends Component {

  componentDidMount() {
  }
  render() {
    return (
      <Wrapper>
       
        <form  role="search" class="search-form" >
          <input type="submit" value="" class="search-submit" />
          <input type="search" name="quyen" class="search-text" placeholder="Search..." autocomplete="off" />
        </form>

      
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
@import url(https://fonts.googleapis.com/css?family=Roboto:300);
body {
  padding: 4rem;
	background: #f3f3f3; 
  font-family: 'Roboto', sans-serif;
}
.contact {
  margin: 4rem 0 0;
  font-weight: bold;
  color: #444;
  line-height: 1.7;
}
.contact a {
  color: #66b;
  font-size: 0.8rem;
}
h1, input{
  color: #444;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}
h1{
  border-bottom: 1px dashed #666;
  padding-bottom: 16px;
}
form{
	padding: 0;
  margin: 0;
}
/* Expandable search box */
/* Note: don't change 0.8s in transition. */
/* --------------------- */
input.search-text {
	color: #222;
	position:relative;
	z-index:5;
	transition: z-index 0.8s, width 0.5s, background 0.3s ease, border 0.3s;
	height: 45px;
	width: 0;
	margin: 0;
	padding: 5px 0 5px 40px;
	box-sizing: border-box;
	font-size: 16px;
	font-size: 1rem;
	cursor: pointer;
	border-radius: 30px;
	border: 1px solid transparent;
	/*background: url(search.png) no-repeat left 9px center transparent;*/
	background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik01MDMuODY2LDQ3Ny45NzRMMzYwLjk1OCwzMzUuMDUyYzI4LjcyNS0zNC41NDQsNDYuMDE3LTc4LjkxMiw0Ni4wMTctMTI3LjMzNiAgYzAtMTEwLjA4NC04OS4yMjctMTk5LjMxMi0xOTkuMzEyLTE5OS4zMTJDOTcuNTk5LDguNDAzLDguMzUxLDk3LjYzMSw4LjM1MSwyMDcuNzE1YzAsMTEwLjA2NCw4OS4yNDgsMTk5LjMxMiwxOTkuMzEyLDE5OS4zMTIgIGM0OC40MzUsMCw5Mi43OTItMTcuMjkyLDEyNy4zMzYtNDYuMDE3bDE0Mi45MDgsMTQyLjkyMkw1MDMuODY2LDQ3Ny45NzR6IE0yOS4zMzEsMjA3LjcxNWMwLTk4LjMzNCw3OS45ODctMTc4LjMzMiwxNzguMzMyLTE3OC4zMzIgIGM5OC4zMjUsMCwxNzguMzMyLDc5Ljk5OCwxNzguMzMyLDE3OC4zMzJzLTgwLjAwNywxNzguMzMyLTE3OC4zMzIsMTc4LjMzMkMxMDkuMzE4LDM4Ni4wNDcsMjkuMzMxLDMwNi4wNSwyOS4zMzEsMjA3LjcxNXoiIGZpbGw9IiMzNzQwNEQiLz48L3N2Zz4=) no-repeat left 9px center transparent;
  background-size:24px;
}
input.search-text:focus {
	z-index:3; 
	width: 270px;
	border: 1px solid #666;  
	background-color: white;
	outline: none;
	cursor:auto;
	padding-right: 10px;
}

input.search-submit {
	position: relative;
	z-index: 4;
	top:17px;
	left: 49px;
	width: 45px;
	height: 45px;
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	border-radius: 30px;
	cursor: pointer; 
	background: none;
}

input.search-text::-webkit-search-cancel-button {
	cursor:pointer;
}
`