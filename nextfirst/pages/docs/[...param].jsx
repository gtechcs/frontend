import React from 'react'
import { useRouter } from 'next/router'

// file => /docs/[...params].jsx
// route => /docs/a/b/c

export default () => {
  const router = useRouter()
  const { params } = router.query
  console.log(router.query);

  // params === ['a', 'b', 'c']
  //TODO: does not work
  console.log(params);
  return (
      <h1>hello </h1>
  )
}