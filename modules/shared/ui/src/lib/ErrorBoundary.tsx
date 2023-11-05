import { Heading } from "@chakra-ui/react";
import React, { ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error(error, errorInfo);
    }

    override render(): React.ReactNode {
        if (this.state.hasError) {
            return <Heading>Something went wrong!</Heading>;
        }
        return this.props.children;
    }
}
