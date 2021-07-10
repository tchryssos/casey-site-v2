import styled from '@emotion/styled';

import Box from '~/components/box/Box';
import FlexBox from '~/components/box/FlexBox';
import GridBox from '~/components/box/GridBox';
import ArrowButton from '~/components/buttons/ArrowButton';
import Image from '~/components/Image';
import Link from '~/components/Link';
import Layout from '~/components/meta/Layout';
import Pickle from '~/components/pickles/Pickle';
import Title from '~/components/typography/Title';
import {
  CORE_COMPONENT_LIBRARY_ROUTE,
  CUSTOMER_DISCOVERY_ROUTE,
  VIDEO_UPLOAD_ROUTE,
} from '~/constants/routing';
import { Color } from '~/typings/theme';

const CoreLink = styled(Link)`
  margin-left: ${({ theme }) => theme.spacing[8]};
`;

type HomePickleProps = {
  imageSrc: string;
  title: string;
  linkTo: string;
  pickleColor: Color;
  imageAlt: string;
};

const SizedPickle = styled(Pickle)`
  width: 94%;
  margin-top: ${({ theme }) => theme.spacing[48]};
`;

const PickleTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing[16]};
  width: 24.5rem;
`;

const ImageBox = styled(FlexBox)`
  height: 30rem;
`;

const TitleBox = styled(FlexBox)`
  margin-right: 14%;
`;

const PickleContentWrapper = styled(GridBox)`
  width: 100%;
`;

const HomePickle: React.FC<HomePickleProps> = ({
  imageSrc,
  imageAlt,
  title,
  linkTo,
  pickleColor,
}) => (
  <SizedPickle color={pickleColor}>
    <PickleContentWrapper alignItems="center" ml={48}>
      <ImageBox center>
        <Image alt={imageAlt} src={imageSrc} />
      </ImageBox>
      <TitleBox column ml={48}>
        <PickleTitle bold>{title}</PickleTitle>
        <Link href={linkTo} internal noHover>
          <ArrowButton title={`Navigate to ${linkTo}`} onClick={undefined} />
        </Link>
      </TitleBox>
    </PickleContentWrapper>
  </SizedPickle>
);

const Home: React.FC = () => (
  <Layout title="Casey Bradford">
    <Box mx={48}>
      <Box>
        <Title>Product Designer balancing personality and utility.</Title>
      </Box>
      <Title>Most recently at AlleyCorp’s</Title>
      <CoreLink href="https://core.fitness/">
        <Title>Core</Title>
      </CoreLink>
    </Box>
    <HomePickle
      imageAlt="several app screens"
      imageSrc="/CustomerDiscovery/customers-2.png"
      linkTo={CUSTOMER_DISCOVERY_ROUTE}
      pickleColor="green"
      title="Rediscovering the Core Customer"
    />
    <HomePickle
      imageAlt="Donkey kong"
      imageSrc="https://upload.wikimedia.org/wikipedia/en/7/75/Donkey_Kong_Country_Returns_Mine_Cart.png"
      linkTo={CORE_COMPONENT_LIBRARY_ROUTE}
      pickleColor="red"
      title="Building Core's Component Library"
    />
    <HomePickle
      imageAlt="Video Upload UI"
      imageSrc="/VideoUpload/VideoCover.png"
      linkTo={VIDEO_UPLOAD_ROUTE}
      pickleColor="blue"
      title="Improving Video Upload Flow"
    />
    <HomePickle
      imageAlt="Donkey kong"
      imageSrc="https://upload.wikimedia.org/wikipedia/en/7/75/Donkey_Kong_Country_Returns_Mine_Cart.png"
      linkTo="/"
      pickleColor="yellow"
      title="Events on Core"
    />
  </Layout>
);

export default Home;
