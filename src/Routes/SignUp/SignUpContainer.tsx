import React from "react";
import SignUpPresenter from "./SignUpPresenter";

class SignUpContainer extends React.Component<any> {
  public render() {
    return <SignUpPresenter />;
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

export default SignUpContainer;
