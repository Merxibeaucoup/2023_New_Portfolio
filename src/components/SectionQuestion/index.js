import React from "react";
import { HeadingSecondary } from "../HeadingSecondary/HeadingSecondaryElement";
import { LinkR } from "../Link/LinkElement";
import { WrapperEl } from "../Wrapper/WrapperElement";
import {
  QuestionColLine,
  QuestionCols,
  QuestionWrapper,
} from "./SectionQuestionElements";

const Question = () => {
  return (
    <QuestionWrapper>
      <WrapperEl>
        <QuestionCols>
          <HeadingSecondary sectionQuestion>
            Im down to work on any projects together , using any technology.
            Have one?
          </HeadingSecondary>
          <QuestionColLine />
          <LinkR to="/contact">contact me</LinkR>
        </QuestionCols>
      </WrapperEl>
    </QuestionWrapper>
  );
};

export default Question;
