import React from 'react';
import { Link } from 'react-router-dom';
import styles from './IntroQuestion.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const IntroQuestion = ({ onClick }) => (
  <div className={cx('question')}>
    <div>
      <h1>
        가즈아! 가상화폐 모의거래!<br />
        {/* <b>300 리플</b> 쏜다! */}
      </h1>
      {/* <p>
        실제 거래소의 실시간 데이터에 기반하여
      <br />모의 거래를 해보세요!
      <br/><br/>매달 수익률 랭킹 1위에게 상금이 지급됩니다.
      </p> */}
    </div>    
    <div className={cx('button')} onClick={onClick}>거래 시작하기</div>
    <Link to="/ranking">
      <div className={cx('button')}>랭킹 확인하기</div>
    </Link>
  </div>
);

export default IntroQuestion;