import { NavLink, useLocation } from 'react-router-dom';
import s from './Pagination.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ArrowLeftSVG } from '../../assets/icon-arrow-left.svg';
import { ReactComponent as ArrowRightSVG } from '../../assets/icon-arrow-right.svg';
import { setPage } from '../../features/goodsSlice';
import cn from 'classnames';

const Pagination = () => {
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;
  const { page, pages } = useSelector(state => state.goods);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  }

  const handlePrevPage = () => {
    if (page > 1) {
      handlePageChange(page - 1);
    }
  }

  const handleNextPage = () => {
    if (page < pages) {
      handlePageChange(page + 1);
    }
  }

  const renderPaginationItems = () => {
    const paginationItems = [];

    let startPage = Math.max(1, page - 1);
    let endPage = Math.min(startPage + 2, pages);

    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <li key={i} className={s.item}>
          <NavLink
            className={cn(s.link, i === +page ?? s.linkActive)}
            to={`${pathname}?page=${i}`}
            onClick={() => handlePageChange(i)}>
            {i}
          </NavLink>
        </li>
      )
    }

    return paginationItems;
  }

  return (
    <div className={s.pagination}>
      <button
        className={s.arrow}
        onClick={handlePrevPage}
        disabled={page <= 2}>
        <ArrowLeftSVG />
      </button>

      <ul className={s.list}>
        {renderPaginationItems()}
      </ul>

      <button
        className={s.arrow}
        onClick={handleNextPage}
        disabled={page >= pages - 1 || pages <= 3}>
        <ArrowRightSVG />
      </button>
    </div>
  )
}

export default Pagination;
