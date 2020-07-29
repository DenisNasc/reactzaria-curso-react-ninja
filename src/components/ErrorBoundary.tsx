import React, {ErrorInfo} from 'react';

interface PropsErrorBoundary {}

interface StateErrorBoundary {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<PropsErrorBoundary, StateErrorBoundary> {
  constructor(props: PropsErrorBoundary) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error: Error): {hasError: true} {
    console.log('error getDerived', error.message);
    return {hasError: true};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log('error: ', error.name);
    console.log('errorInfo: ', errorInfo.componentStack);
  }

  render(): React.ReactNode {
    const {hasError} = this.state;
    const {children} = this.props;

    if (hasError) {
      // You can render any custom fallback UI
      console.log('deu erro');
      return <h1>Something went wrong.</h1>;
    }

    return children;
  }
}

export default ErrorBoundary;
