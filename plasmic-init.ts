import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "6mNKw9zCthb43JqrUSHnsH",
      token:
        "uVnVcTtXfiajjm00ilJmqp4n9R2z6sNLvFBUbMiO3IGN2Oe5k0BEahSnB2eskEbcxjL7MmiwFo4aaNUXdvfg",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

import Markdown from "./components/Markdown";
import { DatePickerWithRange } from "./components/DateRange";
import ReactDateRange from "./components/ReactDateRange";

PLASMIC.registerComponent(Markdown, {
  name: "Markdown",
  props: {
    markdown: {
      type: "string",
      control: "large",
    },
  },
});

PLASMIC.registerComponent(DatePickerWithRange, {
  name: "DatePickerWithRange", // The name used in Plasmic
  props: {
    className: {
      type: "string", // Define the type of className prop
      defaultValue: "m-6", // Default className value
    },
  },
});

PLASMIC.registerComponent(ReactDateRange, {
  name: "ReactDateRange",
  props: {
    isShowDate: {
      type: "boolean",
      defaultValue: false,
    },
    state: {
      type: "array",
      defaultValue: [
        {
          startDate: new Date("2024-01-05"),
          endDate: new Date("2024-01-10"),
          key: "selection",
        },
      ],
    },
  },
});
