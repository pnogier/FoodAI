import styled from 'styled-components/native';

export const MainSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

export const BaseTypo = styled.Text`
  margin: ${(props: {margin: string}) => props.margin || '0'};
  color: ${(props: {color: string}) => props.color || 'black'};
`;

export const Body = styled(BaseTypo)`
  font-size: 16px;
`;

export const Paragraph = styled(BaseTypo)`
  font-size: 14px;
`;

export const Caption = styled(BaseTypo)`
  font-size: 12px;
  color: gray;
`;

export const H1 = styled(BaseTypo)`
  font-size: 22px;
`;

export const H2 = styled(BaseTypo)`
  font-size: 18px;
`;

export const BaseBox = styled.View`
  padding: ${(props: {padding: string}) => props.padding || '0'};
  margin: ${(props: {margin: string}) => props.margin || '0'};
  background-color: ${(props: {backgroundColor: string}) =>
    props.backgroundColor || 'white'};
`;

export const HorizontalBox = styled(BaseBox)`
  flex-direction: row;
`;

export const VerticalBox = styled(BaseBox)`
  flex-direction: column;
`;

export const RoundedBox = styled(BaseBox)`
  border-radius: 8px;
`;
