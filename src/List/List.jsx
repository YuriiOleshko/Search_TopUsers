import React, { Component } from "react";
import { connect } from "react-redux";
import { First } from "react-animation-loaders";
import styled from "styled-components";
const ListUl = styled.ul`
  list-style: none;
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 3%;
`;
const Item = styled.li`
  border: 4px solid rgba(201, 197, 197, 0.342);
  border-left: transparent;
  display: flex;
  border-right: transparent;
  justify-content: flex-start;
  margin: 3%;
  width: 100%;
  background: rgba(201, 197, 197, 0.1);
`;
const Img = styled.img`
  border-radius: 5px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 1%;
  width: 60%;
`;
const A = styled.a`
  color: blue;
  text-decoration: none;
  font-weight: 400;
`;
const Name = styled.h3`
  font-size: 17px;
  margin: 0;
  padding-left: 1%;
`;
const Stars = styled.p`
  margin: auto;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    background-image: url("https://img.icons8.com/color/20/000000/christmas-star.png");
    transform: translate(-120%, 0%);
    width: 20px;
    height: 20px;
  }
`;
const Loc = styled.p`
  margin-left: 9%;
  ::before {
    content: "";
    position: absolute;
    background-image: url("https://img.icons8.com/ios/20/000000/place-marker.png");
    transform: translate(-120%, 0%);
    width: 20px;
    height: 20px;
  }
`;
const Desc = styled.p`
  text-align: left;
  margin: 0;
  width: 100%;
`;
class List extends Component {
  render() {
    const { user, stars } = this.props;

    return (
      <ListUl>
        {user ? (
          user.map((el, index) => (
            <Item key={el.id}>
              <Img
                src={el.avatar_url}
                width="70px"
                height="70px"
                alt="avatar"
              />
              <Wrapper>
                <A href={el.html_url} target="_blank">
                  {el.login}
                </A>{" "}
                <Name>{el.name}</Name>
                <Stars>{stars[index]}</Stars>
                <Desc>{el.bio}</Desc>
                <Loc>{el.location}</Loc>
              </Wrapper>
            </Item>
          ))
        ) : (
          <First />
        )}
      </ListUl>
    );
  }
}
function mapStateToProps(state) {
  return {
    stars: state.stars,
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  null
)(List);
