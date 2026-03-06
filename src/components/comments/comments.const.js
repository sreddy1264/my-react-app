// commentsData.js
export const commentsData = [
  {
    id: 1,
    user: "User1",
    text: "This is the first comment.",
    replies: [
      {
        id: 2,
        user: "User2",
        text: "Reply to User1",
        replies: [
          {
            id: 3,
            user: "User3",
            text: "Reply to User2",
            replies: [
              {
                id: 4,
                user: "User4",
                text: "Deep nested reply!",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        user: "User5",
        text: "Another reply to User1",
        replies: [],
      },
    ],
  },
  {
    id: 6,
    user: "User6",
    text: "Second root comment.",
    replies: [],
  },
];
