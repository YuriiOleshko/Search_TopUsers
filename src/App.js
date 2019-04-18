import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "./redux/action/usersAction";
import { fetchStars,ClearStars } from "./redux/action/starsAction";
import { fetchUser,Clear } from "./redux/action/userAction";
import List from "./List/List";
import styled from "styled-components";
const Wrapper = styled.div`
  text-align: center;
`;
const Title = styled.h1`
  padding-top: 7%;
`;
const SubTitle = styled.h3`
  margin: 3%;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 24px;
    width: 44px;
    height: 45px;
    margin: 0%;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADmwAAA5sBPN8HMQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHlSURBVGiB7dlPS+NAGMfx76TNRalt1Yu+AOt1QS9LrbaoF32tXgVdFNa/y64IIoq+APfgYlNRL20yHtriotvNv5nMCPldE57Mh4fMPCGQJ0+ePJ8pYtSFzmFZKih/VK579fR1wuPoLS8Leuu/pRjxvnMcuVr++vigdTUpEt4RyTXwhUB86xxPTOpfUrKEQhzpLwu4oI85ev4+NpPBumInFFJqPN2LwF8dYOZ7jrtnIybSy15qPN0HkhXgDEsxkXetylKnLSVrWIqJtf3ajIl9jtiKSXQg2ohJfLLbhkk1otiEST1r/QOzbwKjZGh8h6mZwCibfv/C/MIARukYP8CsYwDzP8gpcBK3YGWp0y4Ue5sgroCa77jbjz9KU4lXGDEjvxDTxjsoV4VgB1gAbopBtzneePmt63naIJAtRisEssNo/mbvvzNBV2jfzbR3ZJj2fqXiuHKXYWdwW+P1P3eq6mcGAb2YTCGgD5M5BPRgjEBAPcYYBNRijEJAHcY4BNRgtB+IUVJtet7g0PwJ1Hp0954Pp2fj1LCiI8MMOrMDLBKzM1ZBIDnGOgh8wNwWcZthGCshEB9jLQTiYazYtUal2vQ8J/A3JFwCcz26W6PutRoC/V8ahcBvAScCXkyvJ0+ePHnU5BW+5CHUyc30YwAAAABJRU5ErkJggg==");
    transform: rotate(270deg);
    border-right: 1px solid #f1c40f;
  }
`;
const Form = styled.form``;
const Input = styled.input`
  border: 1px solid #f1c40f;
  border-top: transparent;
  border-right: transparent;
  background: transparent;
  height: 30px;
  padding: 3px;
`;
const Btn = styled.button`
  border: transparent;
  padding: 10px;
  margin-left: 1%;
  border-radius: 9px;
  width: 70px;
  background: #f1c40f;
  color: white;
  text-transform: uppercase;
`;
class App extends Component {
  state = {
    city: "",
    isLoading: true
  };

  showUsers = ev => {
    let val = this.state.city;
    ev.preventDefault();
    this.props.fetch(val);
    this.props.clear();
    this.props.clearStars();
    setTimeout(() => {
      let arr = this.props.users
        .reduce((acc, el) => `${acc},${el.login}`, "")
        .split(",");
      arr.shift();
      arr.map(el => {
        this.props.stars(el);
        this.props.userAll(el);
      });
    }, 1000);
    
  };
  handelChange = ev => {
    ev.preventDefault();
    this.setState({ city: ev.target.value });
  };

  render() {
    return (
      <Wrapper>
        <Title>
          Do you want to know the top 10 most popular gitHub users of your city?
        </Title>
        <SubTitle>You just need to enter your city</SubTitle>
        <Form action="" >
          <Input
            type="text"
            onChange={this.handelChange}
            placeholder="enter your city"
          />
          <Btn type="submit" onClick={this.showUsers}>GO</Btn>
        </Form>
        <List />
      </Wrapper>
    );
  }
}
function mapStateToProps(state) {
  return {
    users: state.users,
    stars: state.stars,
    user: state.user
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetch: function(val) {
      dispatch(fetchData(val));
    },
    stars: function(user) {
      dispatch(fetchStars(user));
    },
    userAll: function(user) {
      dispatch(fetchUser(user));
    },
    clear:function() {
      dispatch(Clear());
    },
    clearStars:function() {
      dispatch(ClearStars());
    },
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
