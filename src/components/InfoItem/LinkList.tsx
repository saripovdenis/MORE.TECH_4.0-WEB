import { FC } from "react";
import { LinkIcon } from "@chakra-ui/icons";

type Props = {
  links: [string, string, string];
};

export const LinkList: FC<Props> = ({ links }) => (
  <>
    {links.map((el) => (
      <LinkIcon onClick={} />
    ))}
  </>
);
