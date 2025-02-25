import { Flex } from "antd";
import Banner from "./Banner";
import ProductLists from "./ProductLists";
import SellerLists from "./SellerLists";

function MainContent() {
  return (
    <div style={{ flex: 1 }}>
      <Flex vertical gap='2.3rem'>
        <Banner />
        <ProductLists />
        <SellerLists />
      </Flex>
    </div>
  );
}

export default MainContent;
