import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ dataTitle,activeId }) => {
  return (
    <div className="col-span-3">
      <p className="text-xl font-bold">All Category</p>
      <ul>
        {dataTitle.map((t,idx) => (
          <li className={`${activeId===t.category_id && 'bg-amber-300'} my-4 list-none font-semibold`} key={idx}>
            <Link className='' href={`/category/${t.category_id}`}>{t.category_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSideBar;