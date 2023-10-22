import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useFetchByRegion } from 'hooks';

export const CountrySearch = () => {
  const { countries, isLoading, error, handleSubmit } = useFetchByRegion();
  return (
    <Section>
      <Container>
        <SearchForm onHandleSubmit={handleSubmit} />
        {isLoading && <Loader />}
        {error && <Heading textAlign="center">Something went wrong...</Heading>}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
