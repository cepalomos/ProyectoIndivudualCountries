import React from 'react'
import {Link, Outlet} from 'react-router-dom';

export default function Navigator() {
  return (
      <>
    <div>Navigator</div>
    <Outlet/>
    </>
  )
}
