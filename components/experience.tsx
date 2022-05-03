import { MDXRemote } from "next-mdx-remote";
import React from "react";
import { Experience, MarkdownData } from "../lib/types";
import { clsx, formatDate } from "../lib/webutils";
import { Tag } from "./tag";

export interface ExperienceProps extends MarkdownData<Experience> {}

const components = {
  a: (props: any) => (
    <a {...props} className={`underline font-bold`} target={`_blank`} />
  ),
};

export function ExperienceTimeline({
  data: { company, startDate, endDate, title, color, technologies, type },
  serializedContent,
}: ExperienceProps) {
  return (
    <>
      <div className="relative grid gap-8 pb-8 pl-10">
        <div
          className="top-0 left-0 absolute flex items-center justify-center
      border-dashed rounded-full border-2 p-2 border-dark"
        >
          <div
            className={clsx("h-3 w-3 rounded-full", {
              "bg-secondary": color === "secondary",
              "bg-tertiary": color === "tertiary",
              "bg-primary": color === "primary",
            })}
          />
        </div>

        <div className="absolute border-dark border border-dashed bottom-0 top-8 left-4" />

        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-2xl">{title}</h3>
          <ul className="flex gap-2 flex-wrap">
            {technologies.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </ul>
          <MDXRemote {...serializedContent} components={components} />
        </div>

        <div>
          <h4 className="font-bold text-xl">
            {company}, {type}
          </h4>

          <p>
            {formatDate(startDate)} -{" "}
            {endDate ? formatDate(endDate) : "Aujourd'hui"}
          </p>
        </div>
      </div>
    </>
  );
}
