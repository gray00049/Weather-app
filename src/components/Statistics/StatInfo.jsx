import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledStatInfo = styled.div`
  display: flex;
  width: 32%;
  padding: 14px 16px;
  border-radius: 6px;
  background: rgba(102, 96, 200, 0.6);
  text-align: left;
  color: #e7e6fb;

  & img {
    margin-right: 12px;
  }

  & .title,
  & .postfix {
    font-size: 1.4rem;
    line-height: 1.6rem;
    font-weight: 400;
  }

  & .value {
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.8rem;
  }
`;

export default function StatInfo({ img, title, value, postfix }) {
  return (
    <StyledStatInfo>
      <img src={img} alt="" />
      <div>
        <p className="title">{title}</p>
        <p className="value">
          {value}
          <span className="postfix"> {postfix}</span>
        </p>
      </div>
    </StyledStatInfo>
  );
}

StatInfo.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  postfix: PropTypes.string,
};

StatInfo.defaultProps = {
  postfix: '%',
};
