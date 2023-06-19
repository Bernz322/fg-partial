const dotIcon = (
  <i className="icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <g>
        <circle
          cx="12"
          cy="12"
          r="8"
          fill="currentColor"
        ></circle>
      </g>
    </svg>
  </i>
);

export const mySNSUSidebarItems = [
  {
    pathname: "/student/schedule",
    icon: dotIcon,
    title: "Classes & Scheds",
  },
  {
    pathname: "/student/grades",
    icon: dotIcon,
    title: "Grades",
  },
  {
    pathname: "/student/get/cor/per/semester",
    icon: dotIcon,
    title: "Certificate of Registration",
  },
  {
    pathname: "/student/evaluation",
    icon: dotIcon,
    title: "Evaluation",
  },
];

export const myUploadsSidebarItems = [
  {
    pathname: "/student/requirements",
    icon: dotIcon,
    title: "Requirements",
  },
];

export const myGSuiteSidebarItems = [
  {
    pathname: "https://classroom.google.com",
    target: "_blank",
    icon: dotIcon,
    title:
      "Email: jbernadas@ssct.edu.ph Password: FGVYAQ20",
  },
];

export const enrollmentSidebarItems = [
  {
    pathname: "enrollment/enroly/add",
    icon: dotIcon,
    title: "Manage Enrollment",
  },
];
