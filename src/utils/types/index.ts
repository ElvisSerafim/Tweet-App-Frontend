type Tweet = {
  id: string;
  message: string;
  createdAt: string;
  user: User;
};

type User = {
  id: string;
  email: string;
  name: string;
  points: number;
};

type Campaign = {
  id: string;
  campaignPhrase: string;
};

type TweetRequest = {
  message: string;
  createdAt: string;
  userEmail: string;
};
