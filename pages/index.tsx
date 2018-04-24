import React from "react";
import styled from "styled-components";
import withData from "../lib/withData";
import { PingQuery, PING } from "../src/graphql/ping";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;
interface Props {
  title: string;
}

class Index extends React.Component<Props> {
  static getInitialProps(): Props {
    return {
      title: "MyTitle",
    };
  }

  render() {
    const { title } = this.props;

    return (
      <PingQuery query={PING}>
        {({ data, loading, error }) => (
          <React.Fragment>
            <Title>{title}</Title>
            <p>{data.ping}</p>
          </React.Fragment>
        )}
      </PingQuery>
    );
  }
}

export default withData(Index);
