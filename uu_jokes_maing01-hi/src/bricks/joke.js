//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const Joke = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "Joke",
  //@@viewOff:statics

  render() {
    //@@viewOn:private
    function handleDelete() {
      UU5.Environment.getPage()
        .getAlertBus()
        .addAlert({
          content: "I can't delete joke. I'm stupid visual component.'",
          closeTimer: 1000
        });
    }
    //@@viewOff:private

    //@@viewOn:render
    function renderHeader() {
      return (
        <>
          My funny joke
          <UU5.Bricks.Button onClick={handleDelete} colorSchema="blue">
            <UU5.Bricks.Icon icon="mdi-delete" />
          </UU5.Bricks.Button>
        </>
      );
    }

    return (
      <UU5.Bricks.Card header={renderHeader()}>
        <div>Once upon a time......</div>
        <UU5.Bricks.Rating value={3} />
      </UU5.Bricks.Card>
    );
    //@@viewOff:render
  }
});

export default Joke;
