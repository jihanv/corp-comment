import { create } from "zustand";
import { Store, TFeedbackItem } from "../lib/types";

export const useFeedbackItemsStore = create<Store>((set, get) => ({
  feedbackItems: [],
  isLoading: false,
  errorMessage: "",
  selectedCompany: "",
  getCompanyList: () => {
    const state = get();
    const companyList = [
      ...new Set(
        state.feedbackItems.map((item: TFeedbackItem) => item.company)
      ),
    ];
    return companyList;
  },
  getFilteredFeedbackItems: () => {
    const state = get();
    return state.selectedCompany !== ""
      ? state.feedbackItems.filter(
          (feedbackItem) =>
            feedbackItem.company.toUpperCase() ===
            state.selectedCompany.toUpperCase()
        )
      : state.feedbackItems;
  },
  handleAddToList: async (text: string) => {
    console.log(text);

    const company = text
      .split(" ")
      .find((word) => word.includes("#"))!
      .substring(1);

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      upvoteCount: 0,
      badgeLetter: company.substring(0, 1),
      company: company,
      text: text,
      daysAgo: 0,
    };

    //   setFeedbackItems([...feedbackItems, newItem])
    set((state) => ({
      feedbackItems: [...state.feedbackItems, newItem],
    }));

    fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  },

  handleSelectedCompany: (company: string) => {
    set(() => ({
      selectedCompany: company,
    }));
  },
  selectCompany: (company: string) => {
    set(() => ({
      selectedCompany: company,
    }));
  },
  fetchFeedbackItems: async () => {
    set(() => ({ isLoading: true }));
    try {
      const response = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );

      if (!response.ok) {
        throw new Error();
      }
      const data = await response.json();
      set(() => ({ feedbackItems: data.feedbacks }));
    } catch {
      set(() => ({ errorMessage: "Something went wrong." }));
    }
    set(() => ({ isLoading: false }));
  },
}));
