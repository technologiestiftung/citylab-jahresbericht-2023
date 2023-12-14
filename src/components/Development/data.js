import { ReactComponent as BildungIcon } from "../../icons/Nav-Icon-Bildung.svg";
import { ReactComponent as KiezlaborIcon } from "../../icons/Nav-Icon-Kiezlabor.svg";
import { ReactComponent as VerwaltungIcon } from "../../icons/Nav-Icon-Verwaltung.svg";
import { ReactComponent as GemeinsamDigitalIcon } from "../../icons/Nav-Icon-GemeinsamDigital.svg";
import { ReactComponent as StadtUndWirIcon } from "../../icons/Nav-Icon-StadtUndWir.svg";

const slideWidth = 317;
const iconWidthPlusGap = 64.5;

export const departmentList = [
  "kiezlabor",
  "gemeinsamDigital",
  "bildung",
  "stadtUndWir",
  "verwaltung",
];

export const departments = {
  kiezlabor: {
    component: <KiezlaborIcon />,
    label: "Smart City",
    navOffset: 0,
    slideOffset: 0,
    years: [2017, 2018, 2019, 2020, 2021],
    projectsPerYear: {
      2017: ["Studien zu vernetzten Kiezen und Mobilität"],
      2018: [
        "Studien zu vernetzten Kiezen und Mobilität",
        "Open Data-Informationsstelle (ODIS)",
      ],
      2019: [
        "Studien zu vernetzten Kiezen und Mobilität",
        "Open Data-Informationsstelle (ODIS)",
        "CityLAB Berlin",
      ],
      2020: [
        "Studien zu vernetzten Kiezen und Mobilität",
        "Open Data-Informationsstelle (ODIS)",
        "CityLAB Berlin",
        "Koordination des Smart City Strategieprozesses",
      ],
      2021: [
        "Studien zu vernetzten Kiezen und Mobilität",
        "Open Data-Informationsstelle (ODIS)",
        "CityLAB Berlin",
        "Koordination des Smart City Strategieprozesses",
      ],
    },
  },
  gemeinsamDigital: {
    component: <GemeinsamDigitalIcon />,
    label: "Neue Technologien",
    navOffset: iconWidthPlusGap,
    slideOffset: -slideWidth,
    years: [2017, 2018, 2019, 2020, 2021],
    projectsPerYear: {
      2017: [
        "Veranstaltungsreihe Treffpunkt WissensWerte",
        "Innovationserhebung und diverse Studien",
      ],
      2018: [
        "Veranstaltungsreihe Treffpunkt WissensWerte",
        "Innovationserhebung und diverse Studien",
      ],
      2019: [
        "Veranstaltungsreihe Soup & Science",
        "Veranstaltungsreihe Treffpunkt WissensWerte",
        "Innovationserhebung und diverse Studien",
      ],
      2020: [
        "Veranstaltungsreihe Soup & Science",
        "Veranstaltungsreihe Treffpunkt WissensWerte",
        "Innovationserhebung und diverse Studien",
      ],
      2021: [
        "Veranstaltungsreihe Soup & Science",
        "Veranstaltungsreihe Treffpunkt WissensWerte",
        "Innovationserhebung und diverse Studien",
      ],
    },
  },
  bildung: {
    component: <BildungIcon />,
    label: "Bildung",
    navOffset: iconWidthPlusGap * 2,
    slideOffset: -slideWidth * 2,
    years: [2017, 2018, 2019, 2020, 2021],
    projectsPerYear: {
      2017: ["Hacking Box"],
      2018: ["Hacking Box"],
      2019: ["Offene Werkstatt im CityLAB Berlin", "Hacking Box"],
      2020: ["Offene Werkstatt im CityLAB Berlin", "Hacking Box", "EduTechMap"],
      2021: ["Offene Werkstatt im CityLAB Berlin", "Hacking Box", "EduTechMap"],
    },
  },
  stadtUndWir: {
    component: <StadtUndWirIcon />,
    label: "Unterwegs",
    navOffset: iconWidthPlusGap * 3,
    slideOffset: -slideWidth * 3,
    years: [2017, 2018, 2019, 2020, 2021],
    projectsPerYear: {
      2017: [],
      2018: [],
      2019: ["unterwegsBdigital"],
      2020: ["unterwegsdaten.berlin", "unterwegsBdigital"],
      2021: ["unterwegsdaten.berlin", "unterwegsBdigital"],
    },
  },
  verwaltung: {
    component: <VerwaltungIcon />,
    label: "Prototyping",
    navOffset: iconWidthPlusGap * 4,
    slideOffset: -slideWidth * 4,
    years: [2017, 2018, 2019, 2020, 2021],
    projectsPerYear: {
      2017: [
        "Datenvisualisierungen, z.B. digitales Tool für Einschulungsbereiche",
      ],
      2018: ["Datenvisualisierungen, z.B. Prognosetool für Badegewässer"],
      2019: [
        "Datenvisualisierungen, z.B. zu Schriftlichen Anfragen im Abgeordnetenhaus",
      ],
      2020: ["Datenvisualisierungen, wie z.B. Gieß den Kiez"],
      2021: ["Datenvisualisierungen, z.B. zur Optimierung von Wahlbezirken"],
    },
  },
};
