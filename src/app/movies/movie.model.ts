export  interface Movie {
  id: string;
  name: string;
  mpaaRating: string;
  releaseDateUtc: string;
  showtimesUrl: string;
  media: {
    posterDynamic: string
  };
}
