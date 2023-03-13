import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClock, faPenNib } from '@fortawesome/free-solid-svg-icons';
import Router from 'next/router';

const shimmer = keyframes`
  100% {-webkit-mask-position:left}
`;

const BlogItemLayout = styled.div`
  width: 90vw;
  border-radius: 1.5rem;
  background-color: rgba(255, 255, 255, 0.2);
  padding: 1.5rem 1.5rem 2rem 1.5rem;
  display: grid;
  grid-template-columns: 4.5rem auto;
  grid-template-rows: 1fr 1fr 1.2fr;
  gap: 0px 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${props =>
    props.placeholder
      ? css`-webkit-mask: linear-gradient(-60deg, #000 30%, rgba(255, 255, 255, 0.7), #000 70%) right/300% 100%;
    background-repeat: no-repeat;
    animation: ${shimmer} 2.5s infinite;
    `
      : css`&:hover {
    background-color: rgba(255, 255, 255, 0.35);
    width: 93vw;
  }`}
`;

const ThumbnailArea = styled.div`
  font-family: 'TossFace', 'SegoeUISymbol', sans-serif;
  font-size: 4rem;
  line-height: 1.2;
  grid-row-start: 1;
  grid-row-end: 3;
`;

const TitleArea = styled.div`
  font-family: 'SegoeUISymbol', sans-serif;
  font-size: min(1.5rem, 5vw);
  font-weight: bold;
  line-height: min(calc(1.5rem + 10px), 5.5vw);
  align-self: center;
`;

const TagArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  font-family: SegoeUISymbol;
  font-size: 15px;
  border-radius: 5px;
  padding-right: 10px;
  font-weight: 600;
  text-shadow: #01baae 0 0 10px;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2px;
`;

const InfoArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 20px;
  align-self: end;
  font-family: 'SegoeUISymbol', sans-serif;
  font-size: 15px;
  color: #cccccc;
`;

const Info = styled.span`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-direction: row;
  line-height: 1;
`;

const Placeholder = styled.div`
  display: inline-block;
  width: ${props => props.width ?? '100%'};
  height: ${props => props.height ?? '20px'};
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 100px;
  -webkit-mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/300% 100%;
  background-repeat: no-repeat;
  animation: ${shimmer} 2.5s infinite;
`;

export default function BlogItem({ blogItem }) {
  let authorData = null;
  const tags = blogItem.tags ?? [null, null];

  if (blogItem.author) {
    authorData = blogItem.author;
    if (authorData.email) {
      authorData += `(${authorData.email})`;
    }
  }

  return (
    <BlogItemLayout
      onClick={() => {
        if (blogItem.id) {
          Router.push({
            pathname: '/post',
            query: { id: blogItem.id },
          });
        }
      }}
      placeholder={!!!authorData}
    >
      <ThumbnailArea>{blogItem.icon ?? '🖤'}</ThumbnailArea>
      <TitleArea>{blogItem.title ?? <Placeholder width="90%" height="30px" />}</TitleArea>
      <TagArea>
        {tags.map((item, index) => (
          <Tag key={index}>#{item ?? <Placeholder width="50px" />}</Tag>
        ))}
      </TagArea>
      <div></div>
      <InfoArea>
        <Info>
          <FontAwesomeIcon icon={faUser} />
          {authorData ?? <Placeholder width="50px" />}
        </Info>
        <Info>
          <FontAwesomeIcon icon={faClock} />
          {dateToText(blogItem.createdAt) ?? <Placeholder width="100px" />}
        </Info>
        <Info>
          <FontAwesomeIcon icon={faPenNib} />
          {dateToText(blogItem.EditedAt) ?? <Placeholder width="100px" />}
        </Info>
      </InfoArea>
    </BlogItemLayout>
  );
}

function dateToText(date) {
  if (!date) return null;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`;
}
