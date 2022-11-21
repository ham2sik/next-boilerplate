import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Dimmed from "../Dimmed/Dimmed";
const Potal = lazy(() => import("../Portal/Portal"));

const StyledModal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: $white;
  border-radius: 16px;
  padding: 40px;
  overflow: hidden;
  z-index: 1200;
`;

export const Modal = ({ children, ...props }) => {
  return (
    <Suspense fallback={""}>
      <Potal selector="#modal">
        <Dimmed>
          <StyledModal {...props}>{children}</StyledModal>
        </Dimmed>
      </Potal>
    </Suspense>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
};
Modal.defaultProps = {};
