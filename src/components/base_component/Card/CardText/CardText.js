import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardText = (props) => (
  <Card className={props.className} {...props}>
    <h2>{props.title}</h2>
    <P>{props.text}</P>
    <Link href={props.link}>{props.linkName}</Link>
  </Card>
)
// const Card = styled.div`
//   width: 920px;
//   height: 400px;
//   margin: ${props => props.margin};
//   padding: 99px 77px;
//   background: #FFFFFF;
//   border-radius: 2px;
// `;

const Card = styled.div(
  props => ({
    margin: props.margin,
    padding: props.padding,
    width: "",
    height: "",
    background: "",
    borderRadius: "",
    border: props.border? "1px solid": null,
  })
)

const P = styled.p(
  props => ({
    margin: props.margin,
    padding: props.padding,
    fontWeight: "300",
  })
)

const Link = styled.a`
  color: #000000;
  margin-bottom: 10px;
  padding-bottom: 10px;
  transition: .3s all;
  border-bottom:1px solid #232323;
  &:hover {
    padding-bottom: 8px;
    text-decoration: none;
    color: #000;
  }
`;

export default CardText
