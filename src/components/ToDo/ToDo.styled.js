import styled from 'styled-components';

export const ListItem = styled.li`
  width: 80%;               /* займає 80% ширини */
  margin: 8px auto;         /* центр по горизонталі */
  padding: 12px;
  border-radius: 8px;
  background: ${({ $completed }) => ($completed ? '#e6ffe6' : '#fff')};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;  /* щоб текст переносився зверху */
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
`;

export const LeftBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TitleLink = styled.a`
  color: ${({ $completed }) => ($completed ? '#777' : '#0077cc')};
  text-decoration: ${({ $completed }) => ($completed ? 'line-through' : 'none')};
  font-weight: 500;
  cursor: pointer;

  /* переносить довгий текст */
  word-wrap: break-word;
  overflow-wrap: anywhere;
  white-space: normal;

  &:hover {
    text-decoration: underline;
  }
`;

export const DeleteButton = styled.button`
  background: ${({ disabled }) => (disabled ? '#ccc' : '#ff4d4d')};
  border: none;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background 0.2s;

  &:hover {
    background: ${({ disabled }) => (disabled ? '#ccc' : '#d93636')};
  }
`;
