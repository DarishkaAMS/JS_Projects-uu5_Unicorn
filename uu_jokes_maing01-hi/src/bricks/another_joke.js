//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const AnotherJoke = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Joke",
  //@@viewOff:statics

  render() {
    //@@viewOn:private
    function redHandleDelete() {
      UU5.Environment.getPage()
        .getAlertBus()
        .addAlert({
          content: "I can't delete joke. Sorry....",
          closeTimer: 1000
        });
    }
    function greenHandleDelete() {
      UU5.Environment.getPage()
        .getAlertBus()
        .addAlert({
          content: "I have done my best",
          closeTimer: 1000
        });
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderHeader() {
      return (
        <>
          My ANOTHER funny joke
          <UU5.Bricks.Button onClick={redHandleDelete} colorSchema="red">
            <UU5.Bricks.Icon icon="mdi-delete" />
          </UU5.Bricks.Button>
          <UU5.Bricks.Button onClick={greenHandleDelete} colorSchema="green">
            <UU5.Bricks.Icon icon="mdi-delete" />
          </UU5.Bricks.Button>
        </>
      );
    }

    return (
      <UU5.Bricks.Card header={renderHeader()}>
        <div>I have a funny story to......</div>
        <UU5.Bricks.Rating value={5} />
      </UU5.Bricks.Card>
    );
    //@@viewOff:render
  }
});

export default AnotherJoke;
