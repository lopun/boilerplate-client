import React from "react";
import HomePresenter from "./HomePresenter";

class HomeContainer extends React.Component<any> {
  public state = {
    users: [],
    currentMenu: 0,
    input: "",
    projects: []
  };

  public render() {
    return <HomePresenter />;
  }

  public onInputChange = async event => {
    const {
      target: { value }
    } = event;
    this.setState({
      input: value
    } as any);
  };
}

export default HomeContainer;
