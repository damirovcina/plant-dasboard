import { Flex } from "antd";
import ContentSidebar from "./ContentSidebar";
import Activity from "./Activity";

function SideContent() {
  return (
    <Flex vertical gap='2.3rem' style={{ width: 300 }}>
      <ContentSidebar />
      <Activity />
    </Flex>
  );
}

export default SideContent;
