import { Heading } from '@chakra-ui/react';
import React, { ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('ErrorBoundary caught an error', error, errorInfo);
    }

    render(): ReactNode {
        if (this.state.hasError) {
            return <Heading>Something went wrong!</Heading>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
