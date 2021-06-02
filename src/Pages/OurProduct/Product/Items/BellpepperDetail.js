import React from 'react';
import {useParams} from 'react-router-dom';

function BellpepperDetail() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();
  console.log('topicId', topicId);

  return (
    <>
      <h1>pepper details here</h1>
    </>
  )
}

export default BellpepperDetail;
