import React from "react";

import styled from "@emotion/styled";

const Group = styled.div({
  paddingTop: '16px',

});

const Label = styled.label({
  padding: '8px'

}

);
const Input = styled.input({

  border: "1px solid black",
  padding: '8px'

});



export const OverlayTextInput = ({value,onChange}) => {
  return (
    <Group>
      <Label htmlFor="overlay-text">Overlay Text</Label>
      <Input
        id="overlay-text"
        value={value}
        onChange={(e)=>onChange(e.target.value)}
    />
    </Group>
  );
};
