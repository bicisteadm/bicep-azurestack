import styled from "styled-components";
import { ResourceTypeGroupCollapseIndicator } from "./ResourceTypeGroupCollapseIndicator";

interface ResourceProviderHeaderProps {
  group: string;
}

const $ResourceTypeGroupHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
`;

export function ResourceTypeGroupHeader({ group }: ResourceProviderHeaderProps) {
  return (
    <$ResourceTypeGroupHeader>
      <ResourceTypeGroupCollapseIndicator />
      <span>{group}</span>
    </$ResourceTypeGroupHeader>
  );
}
