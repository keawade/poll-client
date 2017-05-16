interface IPoll {
  _id: string;
  createdAt: string;
  owner: string;
  question: string;
  responseOptions: string[];
  responses: {
    username: string;
    response: string;
  }[];
}
