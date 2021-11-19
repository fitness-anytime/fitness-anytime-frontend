/**
 all posible position
 expected one of ["top","right","bottom","left","bottom-left-aligned","bottom-middle-aligned","bottom-right-aligned","top-left-aligned","top-middle-aligned","top-right-aligned","auto"].
 */

export const userSteps = () => {
  return [
    {
      element: ".user-page",
      intro: `If this is your first time using Anywhere Fitness, you can go ahead 
      and click Next for a quick tour of our app! If this isn't your first time or
      you'd just like to go straight into finding your new favorite workout, click
      the 'X' in corner of this window.`,
      position: "auto",
      tooltipClass: "myTooltipClass",
      highlightClass: "myHighlightClass",
    },
    {
      position: "bottom-middle-aligned",
      element: " div.user-page > div > div:nth-child(1)",
      intro: `Here is where you'll see all the details of a certain class
      including it's name, the type of workout you'll be doing, as well
      as the time and date that it starts and more.`,
    },
    {
      position: "bottom-middle-aligned",
      element:
        " div.user-page > div:nth-of-type(2) > div:nth-of-type(1) button.MuiButton-root ",
      intro: `If the class looks like something up your alley, click this button
      right here and we'll save a spot just for you.`,
    },
    {
      position: "top",
      element: "div.user-page > div:nth-of-type(1) > div:nth-of-type(1)",
      intro: `Looking for something specific? Maybe something to try next Monday
      morning, or have you maybe been inspired by those Karate videos
      you stayed up late last night watching?
      Click the dropdown menu here to select the category you'd like to
      search by.`,
    },
    {
      position: "bottom-middle-aligned",
      element: "div.user-page > div:nth-of-type(1) > div:nth-of-type(2)",
      intro: `Type into the text box to find exactly what you're
      looking for!`,
    },
  ];
};

export const instructorSteps = () => {
  return [
    {
      element: ".instructor-page",
      intro: `If this is your first time using Anywhere Fitness, you can go
          ahead and click Next for a quick tour of our app! 
          If this isn't your
          first time or you'd just like to go straight into planning out
          your next class, click Skip!`,
      position: "auto",
      tooltipClass: "myTooltipClass",
      highlightClass: "myHighlightClass",
    },
    {
      element: ".create-class-button",
      intro: `Click this button right here and we'll take you to our create-a-class
          form so you can plan and publish your classes to all Anywhere Fitness users.`,
    },
    {
      element: ".instructor-cards-container > div:nth-child(1)",
      intro: `All your published classes can be viewed here formatted into these
          class cards. All your general class information including its name, start time,
          number of members registered, and the rest of its details will be listed here.`,
    },
    {
      element: ".instructor-buttons",
      intro: `If at any time you'd like to reschedule, cancel, or modify any other
          details of one of your classes, click one of these buttons here.
          Be careful though. Once you delete a class, we can't bring it back!`,
    },
    {
      element: ".registered-members",
      intro: `Right under your edit buttons will be a list of every user
          that has currently reserved a spot in your class.
          Once your class starts, just check the box next to their name
          to mark them as attending.`,
    },
  ];
};

export const classFormSteps = () => {
  return [
    {
      element: ".classform-page",
      intro: `Use this form to set all the details for a class. Just fill out each
          section according to the information needed, then click the 'Create' button.
          Make sure to fill out every box, or else you won't be able to post
          your class!`,
      position: "auto",
    },
  ];
};
