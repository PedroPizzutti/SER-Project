import {
  Bio,
  BioDescription,
  CardInfos,
  Container,
  Detail,
  Divider,
  Header,
  Name,
  Profile,
  Row,
} from "./styles";

interface IUserInformationProps {
  data: {
    name: string;
    email: string;
    phone: string;
    picture: string;
    bio: string;
  };
}

export const UserInformation = ({ data }: IUserInformationProps) => {
  return (
    <Container>
      <Header>
        <Profile src={data.picture} alt={data.name}></Profile>
      </Header>
      <CardInfos>
        <Row>
          <Name>{data.name}</Name>
          <Detail>{data.email}</Detail>
        </Row>
        <Detail>{data.phone}</Detail>
        <Divider />
        <Bio>Bio</Bio>
        <BioDescription>
          {data.bio}
        </BioDescription>
      </CardInfos>
    </Container>
  );
};
