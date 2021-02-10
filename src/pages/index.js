import React from 'react';
import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Home() {
   return (
     <div><Redirect to={useBaseUrl('docs')}/></div>
   );
}

export default Home;