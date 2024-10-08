import data from "./projects.json";

export type Project = (typeof data)[number];

export function GetProjects() {
  return data;
}
