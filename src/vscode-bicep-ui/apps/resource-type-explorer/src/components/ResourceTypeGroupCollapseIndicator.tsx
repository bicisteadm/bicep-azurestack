import { Codicon, useAccordionItem } from "@vscode-bicep-ui/components";

export function ResourceTypeGroupCollapseIndicator() {
  const { active } = useAccordionItem();

  return <Codicon name={active ? "chevron-down" : "chevron-right"} size={16} />;
}
