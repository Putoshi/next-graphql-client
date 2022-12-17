import React from 'react';
import {useDispatch} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashCan} from '@fortawesome/free-solid-svg-icons';
// import {deleteMemo} from './store/MemoSlice.js';
import { useGetUsersQuery } from '../services/UserQueryHook';

/**
 * メモの削除ボタン関数
 * @param prop id:メモのID
 * @returns {JSX.Element}
 * @constructor
 */
const UserListView = (prop) => {
  const dispatch = useDispatch();

  const result = useGetUsersQuery();



  // メモID
  const memoId = prop.id;

  /**
   * リストの削除ボタンクリック
   * @param e イベント
   * @param id 削除するメモID
   */
  const onClickDeleteBtn = (e, id) => {
    // const result = useGetUsersQuery();
    console.log(result.data.all);
    // dispatch(
    //   deleteMemo({
    //     id
    //   }),
    // );
    // リストの選択イベントも走ってしまう為、イベントのバブリング停止する
    e.stopPropagation();
  };

  return (
    <React.Fragment>
      AAAAAAAA
      <i className='DeleteBtn__icon'
         onClick={(e) => onClickDeleteBtn(e, memoId)}>
        <FontAwesomeIcon icon={faTrashCan}/>
        DeleteBtn
      </i>
    </React.Fragment>
  );
};

export default UserListView;