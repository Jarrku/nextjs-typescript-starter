import { Query } from "react-apollo";
import gql from "graphql-tag";

interface Data {
  ping: string;
}

export const PING = gql`
  {
    ping
  }
`;

export class PingQuery extends Query<Data> {}
