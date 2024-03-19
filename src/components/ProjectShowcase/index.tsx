import { mockedProjectList } from "@config/mockedData";
import { ProjectShowcaseContainer } from "./styles";
import { ProjectCard } from "@components/ProjectCard";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";

export const ProjectShowcase = () => {
  useEffect(() => {
    window.addEventListener("resize", () => handleContainerWidth());
    handleContainerWidth();
    return () => {
      window.removeEventListener("resize", handleContainerWidth);
    };
  });

  const [containerWidth, setContainerWidth] = useState<number>(280);

  function handleContainerWidth() {
    const clientWidth =
      document.querySelector("." + ProjectShowcaseContainer.className)
        ?.clientWidth || 0;

    setContainerWidth((clientWidth < 280 ? 280 : clientWidth) + 4);
  }

  const cardsPerCarouselPage = Math.floor(containerWidth / (280 + 4)) || 1;

  let projectSets = [];

  for (let i = 0; i < mockedProjectList.length; i = i + cardsPerCarouselPage) {
    projectSets.push(mockedProjectList.slice(i, i + cardsPerCarouselPage));
  }

  return (
    <ProjectShowcaseContainer>
      <Carousel
        className="carousel"
        autoPlay
        infiniteLoop
        emulateTouch
        swipeable
        preventMovementUntilSwipeScrollTolerance
        showThumbs={false}
        showStatus={false}
      >
        {projectSets.map((el, idx) => (
          <div className="cards-container">
            {el.map((e) => (
              <ProjectCard {...e} />
            ))}
          </div>
        ))}
      </Carousel>
    </ProjectShowcaseContainer>
  );
};
