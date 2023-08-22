import React from "react";
import ExploreLayout from "../../layouts/ExploreLayout";
import ExploreBanner from "./components/1. ExploreBanner";
import ExploreFeatures from "./components/2. ExploreFeatures";
import ExploreSearch from "./components/3. ExploreSearch";
import ExploreDownloads from "./components/4. ExploreDownloads";
// import Container from '../../../components/Container';

const ExploreIndex: React.FC = () => {
  return (
    // <Container>
    <ExploreLayout>
      <ExploreBanner />
      <ExploreFeatures />
      <ExploreSearch />
      <ExploreDownloads />
    </ExploreLayout>
    // </Container>
  );
};

export default ExploreIndex;
