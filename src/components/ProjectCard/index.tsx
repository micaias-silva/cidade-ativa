import { Subtitle } from "@styles/Text";
import { ProjectCardContainer, ProjectCategoryLabel } from "./styles";
import { IProjectCard } from "@interfaces/index";
import { Flex } from "@styles/Containers";

export const ProjectCard: React.FC<IProjectCard> = ({
  title,
  imgUrl,
  category,
}) => {
  return (
    <ProjectCardContainer>
      <div className="project-image-container">
        <img src={imgUrl} />
        <ProjectCategoryLabel>{category}</ProjectCategoryLabel>
      </div>
      <Flex className="info-container">
        <Subtitle>{title}</Subtitle>
      </Flex>
    </ProjectCardContainer>
  );
};
