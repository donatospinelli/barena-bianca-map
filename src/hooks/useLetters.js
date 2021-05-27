import { graphql, useStaticQuery } from 'gatsby';

export default function useLetters() {
  const { gcms = {} } = useStaticQuery( graphql`
    query {
      gcms {
        letters {
          id
          title
          text
          image
          location {
            latitude
            longitude
          }
        }
      }
    }
  ` );

  let { letters } = gcms;

  return {
    letters,
  };
}