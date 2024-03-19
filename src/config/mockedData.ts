import { IProjectCard } from "@interfaces/index";
import imageEsportes from "@img/esportes.jpg";
import taekwondoImg from "@img/content/taekwondo-course-cape.webp";
import karateImg from "@img/content/karate-course-cape.jpg";
import capoeiraImg from "@img/content/capoeira-course-cape.png";
import teatroImg from "@img/content/teatro-course-cape.jpg";
import zumbaImg from "@img/content/zumba-course-cape.jpg";
import hipHopDanceImg from "@img/content/hiphopdance-course-cape.webp";
import cinemaImg from "@img/content/cinema-course-cape.jpg";
import desenhoImg from "@img/content/desenho-course-cape.webp";
import englishImg from "@img/content/english-course-cape.png";
import redacaoImg from "@img/content/redação-course-cape.jpg";
import quadrilhaImg from "@img/content/quadrilha-course-image.jpeg";

enum Category {
  sport = "Esporte",
  leisure = "Lazer",
  education = "Educação",
  culture = "Cultura",
}

export const mockedProjectList: IProjectCard[] = [
  {
    title: "Taekwondo",
    category: Category.sport,
    imgUrl: taekwondoImg,
  },
  {
    title: "Karatê",
    category: Category.sport,
    imgUrl: karateImg,
  },
  {
    title: "Capoeira",
    category: Category.sport,
    imgUrl: capoeiraImg,
  },
  {
    title: "Teatro",
    category: `${Category.education} e ${Category.culture}`,
    imgUrl: teatroImg,
  },
  {
    title: "Zumba",
    category: Category.leisure,
    imgUrl: zumbaImg,
  },
  {
    title: "Hip Hop Dance",
    category: Category.culture,
    imgUrl: hipHopDanceImg,
  },
  {
    title: "Oficina de Cinema",
    category: Category.education,
    imgUrl: cinemaImg,
  },
  {
    title: "Oficina de Desenho",
    category: `${Category.education} e ${Category.culture}`,
    imgUrl: desenhoImg,
  },
  {
    title: "Curso de Inglês",
    category: `${Category.education}`,
    imgUrl: englishImg,
  },
  {
    title: "Curso de Redação",
    category: `${Category.education}`,
    imgUrl: redacaoImg,
  },
  {
    title: "Quadrilha Junina",
    category: `${Category.education}`,
    imgUrl: quadrilhaImg,
  },
];
