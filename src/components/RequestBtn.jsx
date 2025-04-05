import styled from "styled-components";
import propTypes from "prop-types";

const Btn = styled.button`
  display: ${({ display }) => (display === 'true' ? "flex" : "none")};
  color: #fff;
  background: linear-gradient(to right, #2fd066, #2bb9cd);
  border: none;
  border-radius: 2rem;
  padding: 0.7rem 1rem;

  &:hover {
    opacity: 70%;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

const BtnText = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-right: 5px;
`;

function RequestBtn({ text, display }) {
  return (
    <Btn display={display}>
      <BtnText>{text}</BtnText>
    </Btn>
  );
}

Btn.propTypes = {
  display: propTypes.string,
};

export default RequestBtn;
