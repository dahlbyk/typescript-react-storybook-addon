
declare module "@kadira/storybook-addons" {

  interface PanelOpts {
    title: string;
    render(): any
  }

  interface AddOn {
    getChannel(): NodeJS.EventEmitter;
    register(name: string, callback: (api: any) => void): void;
    addPanel(id: string, panelOpts: PanelOpts): void
  }

  let addon: AddOn
  export default addon;
}

declare module "@kadira/storybook" {
  interface Story {
    add(storyName: string, callback: Function): Story;
    addDecorator(decorator: any): Story
  }

  export function storiesOf(name: string, module: any): Story;
  export function action(name: string, ...params: any[]): Function;

}

declare module "@kadira/react-storybook-decorator-centered" {
  export default function(): any;
}
