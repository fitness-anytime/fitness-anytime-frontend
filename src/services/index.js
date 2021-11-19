export const getInstructorClasses = () => {
  return [
    {
      name: "Pilates 101",
      type: "Pilates",
      startTime: 1700,
      duration: 60,
      level: 3,
      location: "123 Main St.",
      registered: 0,
      maxSize: 10,
      id: 0,
      registeredMembers: [
        "Darla",
        "Aaron",
        "Brandon",
        "David",
        "Albert",
        "Erik",
      ],
    },
    {
      name: "Jazzercising With Jim",
      type: "Aerobic",
      startTime: 900,
      duration: 60,
      level: 1,
      location: "123 Main St.",
      registered: 0,
      maxSize: 10,
      id: 1,
    },
    {
      name: "Anywhere Fitness Karate",
      type: "Karate",
      startTime: 1500,
      duration: 60,
      level: 2,
      location: "123 Main St.",
      registered: 0,
      maxSize: 10,
      id: 2,
    },
  ];
};

export const getUserClasses = () => {
  return [
    {
      name: "Pilates 101",
      type: "Pilates",
      date: "12/13/2021",
      startTime: 1700,
      duration: 60,
      level: 3,
      reserved: true,
      location: "123 Main St.",
      registered: 0,
      maxSize: 10,
      id: 0,
    },
    {
      name: "Jazzercising With Jim",
      type: "Aerobic",
      date: "11/22/2021",
      startTime: 900,
      duration: 60,
      level: 1,
      reserved: false,
      location: "123 Main St.",
      registered: 0,
      maxSize: 10,
      id: 1,
    },
    {
      name: "Anywhere Fitness Karate",
      type: "Karate",
      date: "12/18/2021",
      startTime: 1500,
      duration: 60,
      level: 2,
      reserved: false,
      location: "123 Main St.",
      registered: 0,
      maxSize: 10,
      id: 2,
    },
  ].sort(function (a, b) {
    if (a.reserved) return -1;
    if (b.reserved) return 1;
    return 0;
  });
};

export const userHasReservation = (classes) => {
  let hasReserved = false;

  classes.forEach((classData) => {
    if (classData.reserved) hasReserved = true;
  });

  return hasReserved;
};
