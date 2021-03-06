import styled from "styled-components";

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 0.3s ease-in-out;
	background: rgba(30, 30, 30, 0.25);
	border: 1px solid rgba(255, 255, 255, 0.18);
	margin: 1vh;
	height: 38vh;
	max-width:500px;
	width: 66vh;
	padding-inline: 1vh;

	&:hover {
		transform: scale(1.02);
	}

	@media (max-width: 768px) {
		height: 30vh;
		width: max(95%, 40vh);
	}

	@media (max-width: 425px) {
		height: 28vh;
		width: max(95%, 38vh);
	}
`;

export const ImageContainer = styled.div`
	overflow: hidden;
	height: 25vh;
	width: 50vh;
	display: flex;
	justify-content: center;

	@media (max-width: 768px) {
		height: 17vh;
		width: 34vh;
	}
`;

export const CardContent = styled.div`
	color: #46caca;
	text-align: center;
	width: 100%;
`;

export const CardTitle = styled.h2`
	margin: 1vh 0;
	color: #fff;

	@media (max-width: 768px) {
		font-size: 22px;
	}

	@media (max-width: 425px) {
		font-size: 12px;
	}
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
`;

export const Button = styled.a`
	cursor: pointer;
	color: inherit;
	font-weight: bold;
	border-bottom: 1px solid transparent;
	text-decoration: none;

	&:hover {
		border-bottom: 1px solid #46caca;
	}

	@media (max-width: 768px) {
		font-size: 16px;
	}

	@media (max-width: 425px) {
		font-size: 10px;
	}
`;
