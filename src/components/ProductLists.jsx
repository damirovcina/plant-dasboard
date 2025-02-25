import { Button, Card, Flex, Typography, Image } from "antd";
import plantData from "../plantData";

const { Meta } = Card;
function ProductLists() {
  return (
    <div>
      <Flex align='center' justify='space-between'>
        <Typography.Title level={3} strong className='primary--color'>
          My Listing
        </Typography.Title>
        <Button type='link' className='gray--color'>
          View All
        </Button>
      </Flex>
      <Flex align='center' gap='large'>
        {plantData.map((plant) => (
          <Card key={plant.id} hoverable className='plant-card'>
            <Image src={plant.picture} style={{ width: 130 }} />
            <Meta title={plant.name} style={{ marginTop: "0.5rem" }} />
          </Card>
        ))}
      </Flex>
    </div>
  );
}

export default ProductLists;
