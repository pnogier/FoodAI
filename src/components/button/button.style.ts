import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: ${(props: {padding: string}) => props.padding || '8px 16px'};
  margin: ${(props: {margin: string}) => props.margin || '0'};
  background-color: ${(props: {backgroundColor: string}) =>
    props.backgroundColor || 'black'};
`;
