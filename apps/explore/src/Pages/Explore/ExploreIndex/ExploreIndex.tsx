import React from 'react';
import ExploreLayout from '../../../layouts/ExploreLayout';
import ExploreSec1 from '../ExploreComponents/ExploreSec1';
import ExploreSec2 from '../ExploreComponents/ExploreSec2';
import ExploreSec3 from '../ExploreComponents/ExploreSec3';
import ExploreSec4 from '../ExploreComponents/ExploreSec4';
// import Container from '../../../components/Container';

const ExploreIndex: React.FC = () => {
  return (
    // <Container>
      <ExploreLayout>
        <ExploreSec1 />
        <ExploreSec2 />
        <ExploreSec3 />
        <ExploreSec4 />
      </ExploreLayout>
    // </Container>
  );
};

export default ExploreIndex;
