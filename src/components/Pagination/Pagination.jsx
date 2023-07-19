import { NavLink, useLocation } from 'react-router-dom';
import s from './Pagination.module.scss';
import { useSelector } from 'react-redux';
import { ReactComponent as ArrowLeftSVG } from '../../assets/icon-arrow-left.svg';
import { ReactComponent as ArrowRightSVG } from '../../assets/icon-arrow-right.svg';
import cn from 'classnames';
import { useEffect, useState } from 'react';

const Pagination = () => {
  const [ pagePagination, setPagePagination ] = useState('');
  const pathname = useLocation().pathname;
  const { page, pages } = useSelector(state => state.goods);

  useEffect(() => {
    setPagePagination(page);
  }, [page]);

  const handlePageChange = (newPage) => {
    setPagePagination(newPage);
  };

  const handlePrevPage = () => {
    if (pagePagination > 1) {
      handlePageChange(pagePagination - 1);
    }
  };

  const handleNextPage = () => {
    if (pagePagination < pages) {
      handlePageChange(pagePagination + 1);
    }
  };

  const renderPaginationItems = () => {
    const paginationItems = [];

    let startPage = (paginationItems === pages) && (pages >= 3)
      ? pagePagination - 2
      : Math.max(1, pagePagination - 1);

    let endPage = Math.min(startPage + 2, pages);

    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <li key={i} className={s.item}>
          <NavLink
            className={cn(s.link, i === pagePagination ?? s.linkActive)}
            to={`${pathname}?page=${i}`}
            onClick={() => handlePageChange(i)}>
            {i}
          </NavLink>
        </li>
      )
    }

    return paginationItems;
  };

  return ( pages > 1 &&
    <div className={s.pagination}>
      <button
        className={s.arrow}
        onClick={handlePrevPage}
        disabled={pagePagination <= 2}>
        <ArrowLeftSVG />
      </button>

      <ul className={s.list}>
        {renderPaginationItems()}
      </ul>

      <button
        className={s.arrow}
        onClick={handleNextPage}
        disabled={pagePagination >= pages - 1 || pages <= 3}>
        <ArrowRightSVG />
      </button>
    </div>
  )
};

export default Pagination;
