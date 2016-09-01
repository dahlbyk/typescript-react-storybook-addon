import * as React from "react";
import addons from "@kadira/storybook-addons";

export class MyDecorator extends React.Component<any, any> {

  private channel: NodeJS.EventEmitter;
  private story: any;

  constructor(props) {
    super(props);

    this.channel = addons.getChannel();
    this.story = this.props.story();

    // this.channel.on("myevent", (data) => this.setState({ data }));
  }

  // componentWillUnmount() {
  //   this.channel.emit("myevent-reset");
  // }

  // componentWillMount() {
  //   this.channel.emit("myevent-set", this.props.myprops);
  // }

  public render() {
    return <div>{this.story}</div>;
  }
}

export default (myprops = undefined) => story => (
  <MyDecorator story={story} myprops={myprops} />
);
