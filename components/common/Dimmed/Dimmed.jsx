import PropTypes from "prop-types";
import styled from "styled-components";

// TODO: polished 사용여부 테스트 필요
const StyledDimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background: ${(props) => {
    return props.isClear
      ? props.theme.colors.dimmedClear
      : props.theme.colors.dimmed;
  }};
`;

const Dimmed = ({ isClear, children, ...props }) => {
  return (
    <StyledDimmed isClear={isClear} {...props}>
      {children}
    </StyledDimmed>
  );
};

Dimmed.propTypes = {
  /**
   * bg color clear(alpha = 0) boolean
   */
  isClear: PropTypes.bool,
  children: PropTypes.node,
};
Dimmed.defaultProps = {
  isClear: false,
};

export default Dimmed;
