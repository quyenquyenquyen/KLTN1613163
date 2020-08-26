import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default class HoverEffect extends Component {
    render() {
        return (
            <Wrapper>

                <div class="content">
                    <div class="grid">
                        <figure class="effect-layla" >
                            <img src={link0} alt="img1" />
                            <figcaption>
                                <h5 style={{ color: "#2a2a72", fontWeight: "bold" }}>BỘ MÔN VLTH</h5>
                                <p  style={{fontStyle:"italic",fontWeight:"bold",color:"white",marginTop:"2px",fontSize:"0.8rem"}}>...view more</p>
                                <a href="gioithieubomon">View more</a>
                            </figcaption>
                        </figure>
                        <figure class="effect-layla">
                            <img src={link1} alt="img2" />
                            <figcaption>
                                <h5 style={{ color: "#2a2a72", fontWeight: "bold" }}>ĐÀO TẠO</h5>
                                <p  style={{fontStyle:"italic",fontWeight:"bold",color:"white",marginTop:"2px",fontSize:"0.8rem"}}>...view more</p>
                                <a href="daotao">View more</a>
                            </figcaption>
                        </figure>
                        <figure class="effect-layla">
                            <img src={link2} alt="img1" />
                            <figcaption>
                                <h5 style={{ color: "#2a2a72", fontWeight: "bold" }}>VIỆC LÀM</h5>
                                <p  style={{fontStyle:"italic",fontWeight:"bold",color:"white",marginTop:"2px",fontSize:"0.8rem"}}>...view more</p>
                                <a href="vieclam">View more</a>
                            </figcaption>
                        </figure>
                        <figure class="effect-layla">
                            <img src={link3} alt="img2" />
                            <figcaption>
                                <h5 style={{ color: "#2a2a72", fontWeight: "bold" }}>THÔNG BÁO</h5>
                                <p  style={{fontStyle:"italic",fontWeight:"bold",color:"white",marginTop:"2px",fontSize:"0.8rem"}}>...view more</p>
                                <a href="/blogpage">View more</a>
                            </figcaption>
                        </figure>
                    </div>


                </div>
            </Wrapper>
        )
    }
}
const link0='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjYounskU7AphwoxHg61MYh3i51hfwLTdAJw&usqp=CAU'
const link1 = 'data:image/jpeg;base64,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'
const link2='img/test9.jpg'
const link3='https://docs.google.com/uc?id=0B7UPM0QugWUjQVlzT0VpTmdYbG8'

const Wrapper = styled.div`

.fancy-card.one{x
    background-image: url("https://docs.google.com/uc?id=0B7UPM0QugWUjQVlzT0VpTmdYbG8");
 }
 .fancy-card.two{
    background-image: url("https://docs.google.com/uc?id=0B7UPM0QugWUjbkR2Um9YZ2pnNzQ");
 }
 .fancy-card.three{
    background-image: url("https://docs.google.com/uc?id=0B7UPM0QugWUjNVVVay1vYkRIV1E");
 }



 .grid {
	position: relative;
	margin: 0 auto;
	padding: 1em 1em 4em;
	max-width: 1000px;
	list-style: none;
    text-align: center;
    height:250px;
}

.grid figure {
	position: relative;
	float: left;
	overflow: hidden;
	margin: 3% 5%;
	max-width: 40%;
	height:100%;
	text-align: center;
    cursor: pointer;
}

.grid figure img {
	position: relative;
	display: block;
	min-height: 100%;
	max-width: 100%;
	opacity: 1;
}

.grid figure figcaption {
	padding: 2em;
	color: #fff;
	text-transform: uppercase;
	font-size: 1.25em;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
	pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption > a {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.grid figure figcaption > a {
	z-index: 1000;
	text-indent: 200%;
	white-space: nowrap;
	font-size: 0;
	opacity: 0;
}

.grid figure h5 {
	word-spacing: -0.15em;
	font-weight: 300;
}

.grid figure h5 span {
	font-weight: 800;
}

.grid figure h5,
.grid figure p {
	margin: 0;
}

.grid figure p {
	letter-spacing: 1px;
	font-size: 68.5%;
}
figure.effect-layla {
	// background: #18a367;
}

figure.effect-layla img {
	height: 390px;
	opacity:0.5
}

figure.effect-layla figcaption {
	padding: 3em;
}

figure.effect-layla figcaption::before,
figure.effect-layla figcaption::after {
	position: absolute;
	content: '';
	opacity: 0;
}

figure.effect-layla figcaption::before {
	top: 30px;
	right: 30px;
	bottom: 30px;
	left: 30px;
	border-top: 1px solid #fff;
	border-bottom: 1px solid #fff;
	-webkit-transform: scale(0,1);
	transform: scale(0,1);
	-webkit-transform-origin: 0 0;
	transform-origin: 0 0;
}

figure.effect-layla figcaption::after {
	top: 30px;
	right: 30px;
	bottom: 30px;
	left: 30px;
	border-right: 1px solid #fff;
	border-left: 1px solid #fff;
	-webkit-transform: scale(1,0);
	transform: scale(1,0);
	-webkit-transform-origin: 100% 0;
	transform-origin: 100% 0;
}

figure.effect-layla h5 {
	padding-top: 26%;
	-webkit-transition: -webkit-transform 0.35s;
	transition: transform 0.35s;
}

figure.effect-layla p {
	padding: 0em 1em;
	text-transform: none;
	opacity: 0;
	-webkit-transform: translate3d(0,-10px,0);
	transform: translate3d(0,-10px,0);
}

figure.effect-layla img,
figure.effect-layla h5 {
	-webkit-transform: translate3d(0,-30px,0);
	transform: translate3d(0,-30px,0);
}

figure.effect-layla img,
figure.effect-layla figcaption::before,
figure.effect-layla figcaption::after,
figure.effect-layla p {
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
}

figure.effect-layla:hover img {
	opacity: 0.7;
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}

figure.effect-layla:hover figcaption::before,
figure.effect-layla:hover figcaption::after {
	opacity: 1;
	-webkit-transform: scale(1);
	transform: scale(1);
}

figure.effect-layla:hover h5,
figure.effect-layla:hover p {
	opacity: 1;
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}

figure.effect-layla:hover figcaption::after,
figure.effect-layla:hover h5,
figure.effect-layla:hover p,
figure.effect-layla:hover img {
	-webkit-transition-delay: 0.15s;
	transition-delay: 0.15s;
}
@media only screen and (min-width: 375px){
	.grid figure {
		position: relative;
		float: left;
		overflow: hidden;
		margin: 1% 1%;
		max-width: 48%;
		height:100%;
		text-align: center;
		cursor: pointer;
	}
}

@media only screen and (min-width: 730px){
	.grid figure {
		position: relative;
		float: left;
		overflow: hidden;
		margin: 1% 1%;
		max-width: 23%;
		height:100%;
		text-align: center;
		cursor: pointer;
	}
}
`
