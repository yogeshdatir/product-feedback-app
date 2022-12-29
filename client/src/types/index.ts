export type IFeedback = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
};

export type INewFeedback = Omit<IFeedback, "id">;
