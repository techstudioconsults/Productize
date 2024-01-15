import { Container } from "@chakra-ui/react";
import React from "react";
import { ExploreBanner } from "../components/ExploreBanner";
import { ExploreFeatures } from "../components/ExploreFeatures";
import { ExploreLayout } from "../../../layouts/ExploreLayout";

export const Explore = () => {
    return (
        <ExploreLayout>
            <Container p={{ base: 4, lg: 0 }} maxW={`70rem`} my={{ base: `3rem`, lg: `7rem` }}>
                <ExploreBanner />
            </Container>
            <Container my={{ base: `3rem`, lg: `7rem` }} p={{ base: 4, lg: 0 }} maxW={`70rem`}>
                <ExploreFeatures title={`Featured`} />
            </Container>
            <Container my={{ base: `3rem`, lg: `7rem` }} p={{ base: 4, lg: 0 }} maxW={`70rem`}>
                <ExploreFeatures title={`Based on your recent search`} />
            </Container>
            <Container my={{ base: `3rem`, lg: `7rem` }} p={{ base: 4, lg: 0 }} maxW={`70rem`}>
                <ExploreFeatures title={`Most Downloaded`} />
            </Container>
        </ExploreLayout>
    );
};
