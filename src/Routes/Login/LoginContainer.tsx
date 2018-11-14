import React from "react";
import LoginPresenter from "./LoginPresenter";

class LoginContainer extends React.Component<any> {
  public render() {
    return <LoginPresenter />;
  }

  public onInputChange: React.ChangeEventHandler<
    HTMLInputElement
  > = async event => {
    const {
      target: { name, value }
    } = event;

    this.setState({
      [name]: value
    } as any);
  };
}

export default LoginContainer;
