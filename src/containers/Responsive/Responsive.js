import React from "react";
import styled from "styled-components";

const Box = styled.div`
  min-height: 2em;
  width: 80%;
  background-color: #82adf4;
  padding: 0.51em;
  font-size: 1.5rem;
  margin: 0.1em;
  float: left;
  @media (min-width: 600px) {
    width: 40%;
    font-size: 3rem;
  }
`;

function Responsive(props) {
    return (
        <React.Fragment>
            <Box>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
      </Box>
            <Box>Lorem ipsum.</Box>{" "}
        </React.Fragment>
    );
}

export default Responsive;
