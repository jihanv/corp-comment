export type TFeedbackItem = {
  id: number;
  upvoteCount: number;
  badgeLetter: string;
  company: string;
  text: string;
  daysAgo: number;
};

export type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};
export type HashtagListProps = {
  companyList: string[];
  handleSelectedCompany: (text: string) => void;
};

export type ContainerProps = {
  isLoading: boolean;
  handleAddToList: (text: string) => void;
  feedbackItems: TFeedbackItem[];
  errorMessage: string;
};

export type HeaderProps = {
  handleAddToList: (text: string) => void;
};

export type FeedBackListProps = {
  isLoading: boolean;
  feedbackItems: TFeedbackItem[];
  errorMessage: string;
};

export type HashtagItemProps = {
  company: string;
  onSelectCompany: (text: string) => void;
};

export type TFeedbackItemsContext = {
  filteredFeedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  companyList: string[];
  handleAddToList: (text: string) => void;
  handleSelectedCompany: (text: string) => void;
};

export type FeedbackItemsContextProps = {
  children: React.ReactNode;
};
