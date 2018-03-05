import React from "react";
import IContext from "../types/context";

interface INotFoundPageProps {
  staticContext: IContext;
}
class NotFoundPage extends React.Component<INotFoundPageProps> {

  public static defaultProps: Partial<INotFoundPageProps> = {
    staticContext: {
      notFound: false,
    },
  };

  public render() {
    this.props.staticContext.notFound = true;
    return <h1>Page not found</h1>;
  }
}

export default NotFoundPage;
